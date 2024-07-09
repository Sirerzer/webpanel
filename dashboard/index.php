<?php include "assets/php/header.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atersir web</title>
</head>

<body>
    <div class="container">
        <?php
        session_start();
        include '../module/db.php';

        // Vérifier si l'utilisateur est connecté via un cookie de session
        if (isset($_COOKIE['token'])) {
            $token = $_COOKIE['token'];

            // Préparer et exécuter la requête pour obtenir l'email de l'utilisateur
            $stmt = $conn->prepare("SELECT mail FROM user WHERE token = ?");
            if ($stmt === false) {
                echo "<div class='message error'>Erreur de préparation de la requête : " . $conn->error . "</div>";
                exit();
            }

            $stmt->bind_param("s", $token);
            $stmt->execute();
            $stmt->store_result();

            // Vérifier si l'utilisateur existe
            if ($stmt->num_rows > 0) {
                $stmt->bind_result($mail);
                $stmt->fetch();
                $stmt->close(); // Fermer la requête

                // Préparer et exécuter la requête pour obtenir les serveurs de l'utilisateur
                $stmt = $conn->prepare("SELECT id, name, uuid, nodesid FROM servers WHERE users = ?");
                if ($stmt === false) {
                    echo "<div class='message error'>Erreur de préparation de la requête : " . $conn->error . "</div>";
                    exit();
                }

                $stmt->bind_param("s", $mail);
                $stmt->execute();
                $stmt->store_result();
                $stmt->bind_result($id, $name, $uuid, $nodesid);

                // Vérifier si des serveurs existent
                if ($stmt->num_rows > 0) {
                    echo "<div class='server-list'>";
                    echo "<ul>";
                    while ($stmt->fetch()) {
                        echo "<li><a href='/server/$uuid'>$name</a></li>";
                    }
                    echo "</ul>";
                    echo "</div>";
                } else {
                    echo "<div class='message info'>Aucun serveur trouvé.</div>";
                }
                $stmt->close(); // Fermer la requête
            } else {
                echo "<div class='message error'>Utilisateur non trouvé.</div>";
            }
        } else {
            echo "<div class='message error'>Utilisateur non connecté.</div>";
        }
        ?>
    </div>
</body>

</html>
