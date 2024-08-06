<?php

namespace Pterodactyl\Http\Controllers\Admin\Roles;


use Pterodactyl\Http\Controllers\Controller;
use Illuminate\Http\Request;


class RolesController extends Controller
{
    public function index()
    {
        // Your logic here
        return view('admin.roles.index');
    }

    public function create()
    {
        // Your logic here
        return view('admin.roles.create');
    }

    public function store(Request $request)
    {
        // Your logic here
    }

    public function show($id)
    {
        // Your logic here
        return view('admin.roles.show', compact('id'));
    }

    public function edit($id)
    {
        // Your logic here
        return view('admin.roles.edit', compact('id'));
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
