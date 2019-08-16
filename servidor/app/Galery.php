<?php
namespace App;
use Illuminate\Database\Eloquent\Model;
class Galery extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'latitud', 'longitud', 'descripcion','imagen', 'fechaCompleta'
    ];
 
}