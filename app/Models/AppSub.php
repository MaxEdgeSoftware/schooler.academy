<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppSub extends Model
{
    use HasFactory;
    static $notPaid = "not paid";
    static $paid = "paid";

    protected $guarded = [];
}
