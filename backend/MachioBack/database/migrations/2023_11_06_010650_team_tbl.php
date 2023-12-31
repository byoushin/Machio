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
        Schema::create('team_tbl', function (Blueprint $table) {
            $table->id('team_id');
            $table->unsignedBigInteger('leader_id');
            $table->string('team_name');	
            $table->timestamps();
            $table->foreign('leader_id')->references('user_id')->on('user_tbl');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_tbl');
    }
};
