<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;

class ExtensionServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Get the base path for extensions
        $basePath = base_path('extensions');

        // Get all directories within /extensions/*/views
        $directories = File::directories($basePath);

        foreach ($directories as $directory) {
            // Check if the directory contains a 'views' subdirectory
            if (File::isDirectory($directory . '/views')) {
                // Extract the namespace from the directory path
                $namespace = basename($directory);

                // Register the view namespace
                View::addNamespace($namespace, $directory . '/views');
            }
        }
    }

    public function register()
    {
        // Any binding or service registration
    }
}
