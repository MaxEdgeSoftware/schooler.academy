<?php

namespace App\Http\Controllers;

use App\Models\AdminSetting;
use App\Models\AppSub;
use App\Models\Package;
use App\Models\Session;
use App\Models\Exam;
use Illuminate\Http\Request;

class AppSubController extends Controller
{
    public $school;

    public function __construct()
    {
        $this->school = school();
    }
    //
    public function index(){
        if(!auth()->check()) return response()->json(false);
        // get last session 
        $currentSession = Session::orderBy("id", "desc")->where("school_id", $this->school->id)->first();
        //if(!$currentSession) return response()->json(true);
        
         // get last term
        $currentTerm = Exam::orderBy("id", "desc")->where("school_id", $this->school->id)->first();

        $usage = Exam::where("school_id", $this->school->id)->get('id')->count();
        
        if($usage <= 1) return response()->json(true);
        

        // get last sub
        $sub = AppSub::where('status', AppSub::$paid)->where([["session_id", $currentSession->id], ["exam_id", $currentTerm->id]])->where("school_id", $this->school->id)->orderBy("id", "DESC")->first();
        if(!$sub) return response()->json(false);
        return response()->json(true);
    }

    public function EdutechPlans(){
        return response()->json(["plans" => Package::all()]);
    }

    public function PaystackKey(){
        return response()->json(AdminSetting::first()->paystack_key);
    }
    
    public function validatePayment(Request $request){
        $secret_key = AdminSetting::first()->secret_key;
        $customer = auth()->user();
        $ref = $request->reference;
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.paystack.co/transaction/verify/$ref",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer $secret_key",
                "Cache-Control: no-cache",
            ),
        ));

        $paystack_response = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if($err){
            $msg2 = "Payment veification failed";
            $res2 = ["status" => "failed", "msg" => $msg2];
        }
        $new_res = json_decode($paystack_response);

        if ($new_res->data->status == "success") {
            // get last session added
            $lastSession = Session::orderBy("id", "DESC")->where("school_id", $this->school->id)->first();

            // get last Term added
            $lastTerm = Exam::orderBy("id", "DESC")->where("school_id", $this->school->id)->first();
            AppSub::create([
                "user_id" => $customer->id,
                "session_id" => $lastSession->id,
                "exam_id" => $lastTerm->id,
                "reference_id" => $ref,
                "school_id" => school()->id,
                "status" => AppSub::$paid,
                "transaction_id" => \Illuminate\Support\Str::random(10)
            ]);
            $msg = "Payment verified";
            $res = ["status" => "success", "msg" => $msg];
            return response()->json($res);
        }


        $msg2 = "Payment veification failed";
        $res2 = ["status" => "failed", "msg" => $msg2];
        return response()->json($res2);
    }
}

