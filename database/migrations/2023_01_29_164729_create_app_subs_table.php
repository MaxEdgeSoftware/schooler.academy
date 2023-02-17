<?php

use App\Models\AppSub;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppSubsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_subs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id")->nullable();
            $table->unsignedBigInteger("session_id")->nullable();
            $table->unsignedBigInteger("exam_id")->nullable();
            $table->string("transaction_id")->nullable();
            $table->string("reference_id")->nullable();
            $table->enum("status", ["not paid", 'paid'])->default(AppSub::$notPaid);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('app_subs');
    }
}
