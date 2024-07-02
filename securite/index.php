<?php
// Inclure l'autoloader de Composer en utilisant __DIR__
require __DIR__ . '/../vendor/autoload.php';

// Charger les variables d'environnement depuis le fichier .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();
?>

<!DOCTYPE html>
<html>
<head>
    <title>Mon Application</title>
</head>
<body>
<main>

</main>
</body>
</html>
