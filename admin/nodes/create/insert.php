<?php
// Informations de connexion à la base de données
include "../../../module/db.php";
// Créer une connexion

// Vérifier la connexion


// Récupérer les données du formulaire
$name = $_POST['name'];
$location = $_POST['location'];
$ram = $_POST['ram'];
$disk = $_POST['disk'];
$ip = $_POST['ip'];
$port = $_POST['port'];
$url = $ip . ':' . $port;
// Préparer et exécuter la requête d'insertion
$sql = "INSERT INTO nodes (name, location, ram, disk, ip) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $name, $location, $ram, $disk, $url);

if ($stmt->execute()) {
    echo "Nouveau enregistrement créé avec succès";
    header("Location: /admin/nodes");
    exit();
} else {
    echo "Erreur: " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion
$stmt->close();
$conn->close();
?>
