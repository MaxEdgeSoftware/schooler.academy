<?php

namespace App\Http\Controllers;

use App\Models\AdminSetting;
use App\Models\AppSub;
use App\Models\Package;
use App\Models\Session;
use App\Models\Exam;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

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

    public function createSchool(){
        $school = AdminSetting::where('email', env('NEW_SCHOOL'))->first();
        if(!$school) dd('');
        //  Create roles
        $roleAdmin = Role::create(['guard_name' => 'api', 'name' => 'Admin', 'school_id' => $school->id]);
        $roleTeacher = Role::create(['guard_name' => 'api', 'name' => 'Teacher', 'school_id' => $school->id]);
        $roleAccountant = Role::create(['guard_name' => 'api', 'name' => 'Accountant', 'school_id' => $school->id]);
        $roleGuardian = Role::create(['guard_name' => 'api', 'name' => 'Guardian', 'school_id' => $school->id]);
        $roleStudent = Role::create(['guard_name' => 'api', 'name' => 'Student', 'school_id' => $school->id]);

        //  permission List as array
        $permissions = [
            // =========academic============

            // attendance
            'student-attendance-list',
            'student-attendance-create',
            'teacher-attendance-list',
            'teacher-attendance-create',

            // session
            'session-list',
            'session-create',
            'session-edit',
            'session-delete',

            // department
            'department-list',
            'department-create',
            'department-edit',
            'department-delete',

            // routine
            'routine-list',
            'routine-create',
            'routine-edit',
            'routine-delete',

            // class room
            'class-room-list',
            'class-room-create',
            'class-room-edit',
            'class-room-delete',

            // class
            'class-list',
            'class-create',
            'class-edit',
            'class-delete',

            // section
            'section-list',
            'section-create',
            'section-edit',
            'section-delete',

            // subject
            'subject-list',
            'subject-create',
            'subject-edit',
            'subject-delete',

            // syllabus
            'syllabus-list',
            'syllabus-create',
            'syllabus-edit',
            'syllabus-delete',

            // homework
            'homework-list',
            'homework-create',
            'homework-edit',
            'homework-delete',

            // =========roles and users============

            // role
            'role-list',
            'role-create',
            'role-edit',
            'role-delete',

            // user
            'user-list',
            'user-create',
            'user-edit',
            'user-delete',
            'user-view',

            // student
            'student-list',
            'student-create',
            'student-edit',
            'student-delete',
            'student-view',

            // parent
            'parent-list',
            'parent-create',
            'parent-edit',
            'parent-delete',
            'parent-view',

            // teacher
            'teacher-list',
            'teacher-create',
            'teacher-edit',
            'teacher-delete',
            'teacher-view',

            // staff
            'accountant-list',
            'accountant-create',
            'accountant-edit',
            'accountant-delete',
            'accountant-view',

            // =========exam============

            // exam
            'exam-list',
            'exam-create',
            'exam-edit',
            'exam-delete',

            // exam schedule
            'exam-schedule-list',
            'exam-schedule-create',
            'exam-schedule-edit',
            'exam-schedule-delete',

            // exam mark
            'exam-mark-list',
            'exam-mark-distribution',

            // exam result rule
            'exam-rule-list',
            'exam-rule-create',
            'exam-rule-edit',
            'exam-rule-delete',

            // exam result
            'exam-result-list',

            // report and announcement
            'student-report',
            'teacher-report',
            'staff-report',
            'class-report',
            'class-routine-report',
            'student-attendance-report',
            'teacher-attendance-report',
            'exam-schedule-report',

            // message-notification
            'message-notification-send',

            // calendar
            'calendar-list',
            'calendar-create',
            'calendar-edit',
            'calendar-delete',

            // promotion
            'promotion-list',
            'promotion-student',

            //========accounting===========

            // fee type
            'fee-type-list',
            'fee-type-create',
            'fee-type-edit',
            'fee-type-delete',

            // fee
            'fee-list',
            'fee-create',
            'fee-edit',
            'fee-delete',

            // expense type
            'expense-type-list',
            'expense-type-create',
            'expense-type-edit',
            'expense-type-delete',

            // expense
            'expense-list',
            'expense-create',
            'expense-edit',
            'expense-delete',

            // setting
            'setting-list',
            'setting-edit',
        ];

        //==================================================
        //================ Admin permissions===============
        //==================================================
        for ($i = 0; $i < count($permissions); $i++) {
            // $permission = Permission::create(['guard_name' => 'api', 'name' => $permissions[$i]]);
            $permission = Permission::where(['name' => $permissions[$i]])->first();
            $roleAdmin->givePermissionTo($permission);
            $permission->assignRole($roleAdmin);
        }

        //==================================================
        //================ Teacher permissions===============
        //==================================================
        $teacher_permissions = [
            // attendance
            'student-attendance-list',
            'student-attendance-create',

            // routine
            'routine-list',
            'routine-create',
            'routine-edit',
            'routine-delete',

            // syllabus
            'syllabus-list',
            'syllabus-create',
            'syllabus-edit',
            'syllabus-delete',

            // homework
            'homework-list',
            'homework-create',
            'homework-edit',
            'homework-delete',

            // exam
            'exam-list',
            'exam-create',
            'exam-edit',
            'exam-delete',

            // exam schedule
            'exam-schedule-list',
            'exam-schedule-create',
            'exam-schedule-edit',
            'exam-schedule-delete',

            // exam mark
            'exam-mark-list',
            'exam-mark-distribution',

            // exam result rule
            'exam-rule-list',
            'exam-rule-create',
            'exam-rule-edit',
            'exam-rule-delete',
            'exam-result-list',

            // report
            'student-report',
            'teacher-report',
            'staff-report',
            'class-report',
            'class-routine-report',
            'student-attendance-report',
            'exam-schedule-report',

            // message-notification
            'message-notification-send',

            // promotion
            'promotion-list',
            'promotion-create',
            'promotion-edit',
            'promotion-delete',
        ];
        foreach ($teacher_permissions as $permission) {
            $permission = Permission::where('name', $permission)->first();
            $roleTeacher->givePermissionTo($permission);
        }

        //==================================================
        //================ Accountant permissions===============
        //==================================================
        $accountant_permissions = [
            // fee type
            'fee-type-list',
            'fee-type-create',
            'fee-type-edit',
            'fee-type-delete',

            // fee
            'fee-list',
            'fee-create',
            'fee-edit',
            'fee-delete',

            // expense type
            'expense-type-list',
            'expense-type-create',
            'expense-type-edit',
            'expense-type-delete',

            // expense
            'expense-list',
            'expense-create',
            'expense-edit',
            'expense-delete',
        ];
        foreach ($accountant_permissions as $permission) {
            $permission = Permission::where('name', $permission)->first();
            $roleAccountant->givePermissionTo($permission);
        }
        setEnv("NEW_SCHOOL", "");
    }
}

