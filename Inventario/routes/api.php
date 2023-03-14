<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductoController;
use App\Http\Controllers\CategoriasController;
use App\Http\Controllers\CalificacionesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/* 
    * RUTAS PRODUCTOS
        - LISTADO DE PRODUCTOS 
        - DATOS DEL PRODUCTO
        - REGISTRO DEL PRODUCTO 
        - ACTUALIZA DATOS DEL PRODUCTO
*/
Route::prefix('productos')->controller(ProductoController::class)->group(function(){
    Route::get('/lista', 'getLista');
    Route::get('/ver/{id}', 'getProducto');
    Route::post('/alta', 'registrar');
    Route::post('/actualiza', 'actualizar');
    Route::get('/delete/{id}', 'delete');
});

/* 
    * RUTA DE CATEGORIAS
*/
Route::prefix('categorias')->controller(CategoriasController::class)->group(function(){
    Route::get('/lista', 'getLista');  
});


/* 
    * RUTA DE CALIFICACIONES DE PRODUCTOS 
*/
Route::prefix('calificacion')->controller(CalificacionesController::class)->group(function(){
    Route::get('/producto/{id}/{cantidad}', 'setCalificacion');  
});