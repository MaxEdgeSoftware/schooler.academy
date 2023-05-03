<?php

namespace App\Http\Controllers\Super;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Seeder\PermissionController;
use App\Models\AdminSetting;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;

class SuperController extends Controller
{
    use AuthenticatesUsers;

    protected function guard()
    {
        return Auth::guard('super');
    }
    
    public function Login(){
        // dd("here");
        return view("admin.login");
    }

    public function getSuperAdmin(){
        $superAdmin = User::where("role", "super")->first();

        if(!$superAdmin){
            return User::create([
                "role" => 'super', "name" => "Maxedge", "email" => "info@maxedge.co.uk", "password" => Hash::make("Maxedge@2021"), 
            ]);
        }
        return $superAdmin;
    }

    
    protected function nowlogin($superAdmin)
    {
        return $this->guard()->login($superAdmin);
    }


    public function LoginSuper(Request $request) {
        $this->validate($request, [
            "password" => "required",
        ], [
            "password" => "Token is required"
        ]);

        $superAdmin = $this->getSuperAdmin();
        if(Hash::check($request->password, $superAdmin->password)){
            $this->nowlogin($superAdmin);
            return redirect()->route("admin.dashboard.action");
        }
        return back()->with("error", "Invalid token");
    }

    public function Action(){
        $schools = AdminSetting::orderBy("id", "DESC")->get();
        return view("admin.action", ["schools" => $schools]);
    }

    public function loginAsSchool($school) {
        $school = AdminSetting::find($school);
        $Crypt = Crypt::encrypt($school->email);
        return redirect('//'.$school->domain.'/token?token='.$Crypt);
    }

    public function AddSchool(){
        return view("admin.add-school");
    }

    public function AddSchoolPost(Request $request){
        $validate = Validator::make($request->all(), [
            "name" => "required|unique:admin_settings",
            "phone" => "required|unique:admin_settings",
            "email" => "required|unique:admin_settings",
            "short_name" => "required",
            "address" => "required",
            "password" => "required|min:8",
        ]);

        if ($validate->fails()) {
            return response()->json([
                'code' => 422,
                'errors' => $validate->errors()
            ], 422);
        }
        $domain = \Illuminate\Support\Str::slug( strtolower($request->short_name));
        $domain = $domain.'.'.env("HOST_URL");
        $isDomain = AdminSetting::where("domain", $domain)->first();
        if($isDomain){
            return response()->json([
                'code' => 422,
                'errors' => [
                    "short_name" => "A School with this short name already exist"
                ]
            ], 200);
        }
        $data = [
            "name" => $request->name,
            "email" => $request->email,
            "phone" => $request->phone,
            "address" => $request->address,
            "favicon" => "/images/fav/favicon.png",
            "logo" => "/images/logo/logo.png",
            "dark_logo" => "/images/logo/blue-logo.png",
            "sidebar_bg" => "#232e3c", 
            "navbar_bg" => "#fff", 
            "sidebar_text_color" => "#232e3c",
            "navbar_text_color" => "#232e3c",
            "layout" => "boxed",
            "nav_position" => "left",
            "domain" => $domain
        ];
        // name, email, address, phone,favicon,logo,dark_logo,
        $school = AdminSetting::create($data);


        $admin = User::create([
            "role" => "admin",
            "name" => $request->name,
            "email" => $request->email,
            "password" => Hash::make($request->password),
            "school_id" => $school->id,
        ]);


        // create role
        $permissionController = new PermissionController;
        $permissionController->init($school->id);
        $data = [
            "name" => $request->name, 
            "link" => "https://".$domain,
            "email" => $request->email,
            "password" => $request->password
        ];
    
        $content = view("emails.messages.template", $data)->render();
        sendTribearc($request->email, "WELCOME TO EDUTECH SCHOOLS", $content);
        // send email
        return response()->json([
            'code' => 200,
        ], 200);
    }
}
