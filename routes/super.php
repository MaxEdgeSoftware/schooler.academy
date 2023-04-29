<?php

use App\Http\Controllers\Super\SuperController;
use Illuminate\Support\Facades\Route;

Route::namespace('Admin')->name('admin.')->group(function () {
    Route::namespace('Auth')->group(function () {
        Route::get('/', [SuperController::class, 'Login']);
        Route::post('/login', [SuperController::class, 'LoginSuper'])->name("login");
    });

    Route::middleware("super")->name("dashboard.")->group(function(){
        Route::get('/action', [SuperController::class, 'Action'])->name("action");
        Route::get('/loginAsSchool/{school}', [SuperController::class, 'loginAsSchool'])->name("loginAsSchool");
        Route::get('/add-school', [SuperController::class, 'AddSchool'])->name("AddSchool");    
        Route::post('/add-school', [SuperController::class, 'AddSchoolPost'])->name("AddSchoolPost");    
    });
});
