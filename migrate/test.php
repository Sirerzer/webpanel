<?php

// Configuration de la connexion à la base de données
include '../module/db.php';
// Chemin vers le fichier SQL à importer
$sql_file = "fichier.sql"; // Remplacez par le chemin de votre fichier SQL

// Connexion à la base de données MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérification de la connexion
if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Lecture du fichier SQL
$sql = file_get_contents($sql_file);

// Exécution des requêtes SQL
if ($conn->multi_query($sql) === TRUE) {
    echo "Importation du fichier SQL réussie.";
} else {
    echo "Erreur lors de l'importation du fichier SQL : " . $conn->error;
}

// Fermeture de la connexion
$conn->close();

?>
