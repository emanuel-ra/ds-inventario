<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\models\Categoria;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Producto>
 */
class ProductoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cantidad = fake()->numberBetween(0, 100);
        return [
            "sku" => fake()->isbn10() , 
            "nombre" => fake()->name() ,
            "descripcion" => fake()->paragraph() ,
            "categoria_id" => Categoria::all()->random()->id , 
            "precio" => fake()->randomFloat(2,100,999) ,
            "cantidad" => $cantidad , 
            "estado" => ($cantidad) ? 1:0, 
        ];
    }
}
