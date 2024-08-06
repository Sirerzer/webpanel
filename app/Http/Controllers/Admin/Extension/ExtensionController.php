<?php

namespace Pterodactyl\Http\Controllers\Admin\Extension;


use Pterodactyl\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ExtensionController extends Controller
{
    public function index()
    {
        // Your logic here
        return view('admin.extension.index');
    }

    public function create()
    {
        // Your logic here
        return view('admin.extension.create');
    }

    public function store(Request $request)
    {
        // Your logic here
    }

    public function show($id)
    {
        // Your logic here
        return view('admin.extension.show', compact('id'));
    }

    public function edit($id)
    {
        // Your logic here
        return view('admin.extension.edit', compact('id'));
    }

    public function update(Request $request, $id)
    {
        // Your logic here
    }

    public function destroy($id)
    {
        // Your logic here
    }
}
