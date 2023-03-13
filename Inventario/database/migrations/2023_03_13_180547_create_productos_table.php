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
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('sku');
            $table->string('nombre');
            $table->text('descripcion')->nullable();
            $table->unsignedInteger('categoria_id');
            $table->decimal('precio',15,2);       
            $table->integer('cantidad');
            $table->tinyInteger('estado');
            $table->tinyInteger('estatus_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
