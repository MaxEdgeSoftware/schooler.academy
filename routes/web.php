<?php

use App\Http\Controllers\AppSubController;
use App\Models\User;
use msztorc\LaravelEnv\Env;
use App\Models\ClassRoutine;
use Illuminate\Http\Request;
use App\Models\StudentAttendance;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;

Route::get('test', function () {
    $user = User::whereEmail('admin@gmail.com')->first();
    return dd(Hash::check('password', $user->password));
    return $user->password;






    $filePath =  base_path("/resources/js/locales");

    return $files = \File::files($filePath);

    // return 123;

    $env = new Env();
    $val = $env->setValue('APP_NAME', 'Edutech');

    echo $val; // Laravel App


    // return auth()->user()->student->id;
    $session_id = adminSetting()->default_session_id;
    return $student_attendance = StudentAttendance::where('student_id', auth()->user()->student->id)->get();
});

Route::get('seed-tables', function(){
    $tables = DB::select('SHOW TABLES');
    $dbname = env('DB_DATABASE');
    foreach($tables as $table)
    {
        try {
            $table = json_decode(json_encode($table), true)['Tables_in_'.$dbname];
            // add column to array;
            Schema::table($table, function (Blueprint $table) {
                $table->unsignedBigInteger('school_id')->nullable();
            });
        } catch (\Throwable $th) {
            //throw $th;
        }
        dd('smile');
    }
});
// route for checking subscription
Route::get('/app-subscription/check', [AppSubController::class, 'index']);
Route::get('/create-school', [AppSubController::class, 'createSchool']);

Route::get('/auth-user', function(){return response()->json(auth()->user());});
Route::get('/edutech-plans', [AppSubController::class, 'EdutechPlans']);
Route::get('/get-paystack-key', [AppSubController::class, 'PaystackKey']);
Route::post("/payment-validate", [AppSubController::class, 'validatePayment']);
Auth::routes();
Route::get('logs', '\Rap2hpoutre\LaravelLogViewer\LogViewerController@index');

Route::get('/getid/{student_id}', function(Request $request){   
    $user = User::findOrFail($request->student_id);
    $student = $user->student;
    return response()->json($student->id);
});


include(base_path('routes/payment.php'));
Route::get('/u', function(){
    if(!auth()->check()){
        Auth::login(User::first());
        dd("not active", User::first()->id);
    }
    dd(auth()->guard('web')->user());
});
// ====================Artisan command======================
Route::middleware('auth:web')->group(function () {
    Route::get('route-clear', function () {
        \Artisan::call('route:clear');
        dd("Route Cleared");
    });
    Route::get('optimize', function () {
        \Artisan::call('optimize');
        dd("Optimized");
    });
    Route::get('view-clear', function () {
        \Artisan::call('view:clear');
        dd("View Cleared");
    });
    Route::get('view-cache', function () {
        \Artisan::call('view:cache');
        dd("View cleared and cached again");
    });
    Route::get('config-cache', function () {
        \Artisan::call('config:cache');
        dd("configuration cleared and cached again");
    });
    Route::get('storage-link', function () {
        $path = public_path()."/storage";
        if (file_exists($path)) {
            unlink($path);
        }
        \Artisan::call('storage:link');
        dd("storage link created");
    });
});
Route::middleware('school')->group(function(){
    Route::get('/{any?}', function () {
        return view('app');
    })->where('any', '[\/\w\.-]*');
});