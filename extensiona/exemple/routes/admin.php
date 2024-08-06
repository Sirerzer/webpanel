<?php
use Illuminate\Support\Facades\Route;
use Pterodactyl\Http\Controllers\Admin;
use Pterodactyl\Http\Middleware\Admin\Servers\ServerInstalled;

//Route::group(['prefix' => 'theme'], function () {
//    Route::get('/', [Admin\ApiController::class, 'index'])->name('admin.extension.index');
//   
//});