<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

use App\models\Producto;

class ProductoController extends Controller
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
        * LISTA DE PRODUCTOS
        * @return json
    */
    public function getLista(){
        $datos = Producto::with('Categoria')->get();
        return Response::json($datos, 201);
    }
    /*
        * DATOS DEL PRODUCTO
        * @return json
    */
    public function getProducto($id){
        $datos = Producto::find($id);
        return Response::json($datos, 201);
    }
    /*
        * REGISTRO DEL PRODUCTO
        * @return json
    */
    public function registrar(Request $request){

        // VALIDACIONES 
        $this->validate($request,[
            "sku" => 'required|max:10' ,
            "nombre" => 'required|max:255' ,
            "descripcion" => 'nullable' ,
            "categoria_id" => 'required' ,
            "precio" => ['required','numeric','min:1','regex:/^[0-9]+(\.[0-9]{1,2})?$/'] ,
            "cantidad" => 'required' ,
        ]);

        $producto = new Producto;

        /* 
            * si la cantidad es mayor a 1 el estado es 1 (con inventario)
            * si la cantidad es menor a 1 el estado es 0 (sin inventario)
        */
        $producto->sku = $request->sku;
        $producto->nombre = $request->nombre;
        $producto->descripcion = $request->descripcion;
        $producto->categoria_id = $request->categoria_id;
        $producto->precio = $request->precio;
        $producto->cantidad = $request->cantidad;        
        $producto->estado = ($request->cantidad>1) ? 1:0;
               
        try{
            $producto->save();
            return Response::json([
                'mensaje'  => "Producto registrado",
                'data' => $producto
            ], 201);
        }catch(\Exception $e)
        {   
            return response()->json([
                'mensaje'  => "Problema al registrar producto",
                'data'=>[]
            ], 400);
        }
    }
    /*
        * ACTUALIZA DATOS DEL PRODUCTO
        * @return json
    */
    public function actualizar(Request $request)
    {
        // VALIDACIONES 
        $this->validate($request,[
            "id" => 'required' ,
            "sku" => 'required|max:10' ,
            "nombre" => 'required|max:255' ,
            "descripcion" => 'nullable' ,
            "categoria_id" => 'required' ,
            "precio" => ['required','numeric','min:1','regex:/^[0-9]+(\.[0-9]{1,2})?$/'] ,
            "cantidad" => 'required' ,
        ]);

        $producto = Producto::find($request->id);

        $producto->sku = $request->sku;
        $producto->nombre = $request->nombre;
        $producto->descripcion = $request->descripcion;
        $producto->categoria_id = $request->categoria_id;
        $producto->precio = $request->precio;
        $producto->cantidad = $request->cantidad;        
        $producto->estado = ($request->cantidad>1) ? 1:0;

        try{
            $producto->save();
            return Response::json([
                'mensaje'  => "Producto actualizado",
                'data' => $producto
            ], 201);
        }catch(\Exception $e)
        {   
            return response()->json([
                'mensaje'  => "Problema al registrar producto",
                'data'=>[]
            ], 400);
        }
    }
}
