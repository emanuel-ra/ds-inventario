<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Categoria;
use Illuminate\Support\Facades\Response;

class CategoriasController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /*
        * LISTA DE CATEGORÍAS
        * @return json
    */
    public function getLista(){
        $datos = Categoria::select('id','nombre')->get();
        return Response::json($datos, 201);
    }
}
