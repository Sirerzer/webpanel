<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atersir web</title>
    <script src="https://kit.fontawesome.com/4bfe10eef3.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&amp;display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="/assets/css/styledash.c" rel="stylesheet">

    <?php

session_start();
include '../module/db.php';

// Vérifier si l'utilisateur est connecté via un cookie de session
if (isset($_COOKIE['token'])) {
    $token = $_COOKIE['token'];

    // Préparer et exécuter la requête pour obtenir l'email de l'utilisateur
    $stmt = $conn->prepare("SELECT mail FROM user WHERE token = ?");
    if ($stmt === false) {
        echo "Erreur de préparation de la requête : " . $conn->error;
        exit();
    }

    $stmt->bind_param("s", $token);
    $stmt->execute();
    $stmt->store_result();

    // Vérifier si l'utilisateur existe
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($mail);
        $stmt->fetch();
        $stmt->close();// Close the statement

        // Préparer et exécuter la requête pour obtenir les serveurs de l'utilisateur
        $stmt = $conn->prepare("SELECT id, uuid, nodesid FROM servers WHERE users = ?");
        if ($stmt === false) {
            echo "Erreur de préparation de la requête : " . $conn->error;
            exit();
        }

        $stmt->bind_param("s", $mail);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($id, $uuid, $nodesid);

        // Vérifier si des serveurs existent
        if ($stmt->num_rows > 1) {
            // Lister les serveurs
            echo "<ul>";
            while ($stmt->fetch()) {
                echo "<li><a href='/server/$uuid'>Serveur $id (UUID: $uuid)</a></li>";
            }
            echo "</ul>";
        } else {
            
            while ($stmt->fetch()) {
                $_GET['uuid'] = $uuid;
                include '../server/index.php'; 
            }
        }
        $stmt->close();// Close the statement
    } else {
        echo "Utilisateur non trouvé.";
    }
} else {
    echo "Utilisateur non connecté.";
}

?>
