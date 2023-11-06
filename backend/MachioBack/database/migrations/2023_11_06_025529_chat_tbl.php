<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chat_tbl', function (Blueprint $table) {
            $table->id('chat_id');
            $table->foreign('team_id')->references('team_id')->on('team_tbl');
            $table->foreign('user_id')->references('user_id')->on('user_tbl');
            $table->string('sentence');					
            $table->time('send_date');					
            $table->timestamps();
            $table->unsignedBigInteger('team_id');
            $table->unsignedBigInteger('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chat_tbl');
    }
};
