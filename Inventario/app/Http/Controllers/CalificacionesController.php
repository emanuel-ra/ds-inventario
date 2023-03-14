<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Calificaciones;
use Illuminate\Support\Facades\Response;

class CalificacionesController extends Controller
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
        * REGISTRA CALIFICACION DEL PRODUCTO
        * @return json
    */
    public function setCalificacion($id,$cantidad){
        // TODO: MEJORAR VALIDACIONES 
        if(!(int)$id){
            return response()->json([
                'mensaje'  => "parámetro incorrecto",
                'data'=>[]
            ], 400);
        }

        if(!(int)$cantidad){
            return response()->json([
                'mensaje'  => "parámetro incorrecto",
                'data'=>[]
            ], 400);
        }
  
        $calificacion = new Calificaciones;
        $calificacion->product_id = $id;
        $calificacion->cantidad = $cantidad;

        try{
            $calificacion->save();
            return Response::json([
                'mensaje'  => "Producto calificado",
                'data' => $calificacion
            ], 201);
        }catch(\Exception $e)
        {   
            return response()->json([
                'mensaje'  => "Problema al calificar producto ".$e->getMessage(),
                'data'=>[]
            ], 400);
        }        
    }
}
