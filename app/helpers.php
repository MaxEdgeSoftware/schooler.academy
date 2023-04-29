<?php

use App\Models\AdminSetting;
use Illuminate\Support\Facades\Storage;

function responseSuccess($responseName = null, $data = null, $msg = null)
{
    return response()->json([
        'success' => true,
        $responseName => $data,
        'message' => $msg,
    ], 200);
}

function responseError($msg = 'Something went wrong, please try again', $code = 404)
{
    return response()->json([
        'success' => false,
        'message' => $msg,
    ], $code);
}

function flashSuccess($msg)
{
    session()->flash('success', $msg);
}

function flashError($message = 'Something went wrong, please try again')
{
    session()->flash('error', $message);
}

function uploadFileToStorage($file, string $path)
{
    $file_name = $file->hashName();
    Storage::putFileAs($path, $file,  $file_name);
    return $path . '/' .  $file_name;
}

function uploadFileToPublic($file, string $path)
{
    if ($file && $path) {
        $file_name = $file->hashName();
        $file->move('uploads/' . $path, $file_name);
        $url = 'uploads/' . $path . '/' . $file_name;
    } else {
        $url = null;
    }

    return $url;
}

function deleteImage($image)
{
    $oldFile = file_exists(public_path($image));

    if ($oldFile) {
        @unlink(public_path($image));
    }
}

function setEnv($key, $value)
{
    $path = app()->environmentFilePath();

    $escaped = preg_quote('=' . env($key), '/');

    file_put_contents($path, preg_replace(
        "/^{$key}{$escaped}/m",
        "{$key}={$value}",
        file_get_contents($path)
    ));

    return true;
}

function adminSetting()
{
    return school();
}

function currentSession()
{
    return school()->default_session_id;
}

function checkSetup($type = 'mail')
{
    $paypal_mode = env('PAYPAL_MODE') == 'sandbox' ? 0 : 1;
    $paypal = $paypal_mode ? env('PAYPAL_LIVE_CLIENT_ID') && env('PAYPAL_LIVE_CLIENT_SECRET') : env('PAYPAL_SANDBOX_CLIENT_ID') && env('PAYPAL_SANDBOX_CLIENT_SECRET');
    $stripe = env('STRIPE_KEY') && env('STRIPE_SECRET');
    $razorpay = env('RAZORPAY_KEY') && env('RAZORPAY_SECRET');
    $paystack = env('PAYSTACK_PUBLIC_KEY') && env('PAYSTACK_SECRET_KEY') && env('PAYSTACK_PAYMENT_URL');

    switch ($type) {
        case 'mail':
            $status = env('MAIL_MAILER') && env('MAIL_HOST') && env('MAIL_PORT') && env('MAIL_USERNAME') && env('MAIL_PASSWORD') && env('MAIL_ENCRYPTION') && env('MAIL_FROM_ADDRESS') && env('MAIL_FROM_NAME');
            break;
        case 'payment':
            $status = $paypal || $stripe || $razorpay || $paystack;
            break;
    }

    return $status ? 1 : 0;
}

function school(){
    $http = $_SERVER["HTTP_HOST"];
    return AdminSetting::where('domain', $http)->firstOrFail();
}


function sendTribearc($receiver_email, $subject, $message)
{
        $curl = curl_init();
        curl_setopt(
            $curl,
            CURLOPT_URL,
            "https://mail.tribearc.com/api/campaigns/send_now.php"
        );
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); //
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); //
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST"); //
        curl_setopt($curl, CURLOPT_POSTFIELDS, [
            "api_key" => env("Tribearc_API_KEY"),
            "from_name" => "SCHOOLERTECH ACADEMY",
            "from_email" => "noreply@edutech.com",
            "reply_to" => "noreply@edutech.com",
            "subject" => $subject,
            "html_text" => $message,
            "track_opens" => "1",
            "track_clicks" => "1",
            "send_campaign" => "1",
            "json" => "1",
            "emails" => $receiver_email,
            "business_address" => "EC3N 4EE 1 TOWER HILL TERRACE, LONDON, UK",
            "business_name" => "SCHOOLERTECH ACADEMY",
        ]);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array('Api-Token:' . env('TRIBEARC_MAIL_API_KEY')));

        $response = curl_exec($curl);
        $res = $response;
        curl_close($curl);
        if($res == 'Message sent!'){
            return $res;
        }else{
            return 'An error occurred';
        }
}