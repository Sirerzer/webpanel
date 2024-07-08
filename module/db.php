<?php
require __DIR__ . '/../vendor/autoload.php';

require __DIR__ . '/../securite/index.php';

$servername = $_ENV['DB_URL'] . ':' . $_ENV['DB_PORT'];
$database = $_ENV['DB_NAME'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $database);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
;
?>
