<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    use HasFactory;
    protected $fillable = ['session_id',  'transaction_no', 'amount','school_id'];

    public function scopeCurrentSession($query)
    {
        return $query->whereSessionId(currentSession());
    }
}
