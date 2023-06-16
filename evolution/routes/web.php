<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\paymob;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::view('/mixed', 'welcome');
Route::view('/ladies', 'welcome');
Route::view('/team', 'welcome');
Route::view('/subscribe', 'welcome');
Route::view('/ashour', 'welcome');
Route::view('/attia', 'welcome');
Route::view('/haidy', 'welcome');
Route::view('/nassar', 'welcome');
Route::view('/maken', 'welcome');
Route::view('/gaber', 'welcome');

// Route::view('/status', 'status');
// Route::get('/subscribe' , [paymob::class , 'subscribe']) ->name ('subscribe');
Route::get('/status' , [paymob::class , 'status']) ->name ('status');
Route::get('/jsons' , [paymob::class , 'PostState']);

// Route::get('/status', function () {
//     return view('status');
// });