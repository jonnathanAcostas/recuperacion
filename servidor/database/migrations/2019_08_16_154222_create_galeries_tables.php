<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGaleriesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('galeries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('latitud');
            $table->string('longitud');
            $table->text('descripcion');
            $table->text('imagen');
            $table->date('fechaCompleta');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('galeries_tables');
    }
}
