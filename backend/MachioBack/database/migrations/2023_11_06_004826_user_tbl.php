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
        Schema::create('user_tbl', function (Blueprint $table) {
            $table->id('user_id');
            $table->string('mail');
            $table->integer('tel');
            $table->string('affiliation');
            $table->date('birth');
            $table->date('registration_date');
            $table->string('password');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_tbl');
    }
};
