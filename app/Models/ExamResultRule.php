<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamResultRule extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'min_mark', 'max_mark','school_id'
    ];

    protected $casts = [
        //'gpa' => 'float',
    ];
}
