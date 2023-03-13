<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        return 'hello';
    }
}
