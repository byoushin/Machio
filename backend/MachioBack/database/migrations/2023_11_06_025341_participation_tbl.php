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
        Schema::create('participation_tbl', function (Blueprint $table) {
            $table->unsignedBigInteger('event_id');
            $table->unsignedBigInteger('team_id');
            $table->unsignedBigInteger('user_id');
            $table->boolean('classification');
            $table->integer('score');
            $table->integer('rank');						
            $table->double('latitude');
            $table->double('longitude');						
            $table->timestamps();
            $table->foreign('event_id')->references('event_id')->on('event_tbl');    
            $table->foreign('team_id')->references('team_id')->on('team_tbl');
            $table->foreign('user_id')->references('user_id')->on('user_tbl');
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participation_tbl');
    }
};
