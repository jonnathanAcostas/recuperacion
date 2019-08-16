<?php
namespace App\Http\Controllers;
use App\Contact;
use Illuminate\Http\Request;
class ContactsController extends Controller
{
    public function getContacts(){
        $contacts = Contact::get();
        return response()->json(["contacts"=>$contacts]);
    }
    public function createContact(Request $request){
        $category = Contact::create($request->json()->all());
        return response()->json($category, 201);
    }
}