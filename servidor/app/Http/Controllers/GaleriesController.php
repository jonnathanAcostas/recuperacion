<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Galery;
class GaleriesController extends Controller
{
    public function createGaleria(Request $request){
        $galeries = Galery::create($request->all());
        return response()->json(["galery"=> $galeries], 200);
    }
    public function getPicture()
    {
        $galery = Galery::get();
        return response()->json(["galery" => $galery], 200);
    }
}
