<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atersir web</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/chart.js" rel="stylesheet">
    <link href="/assets/css/styledash.css" rel="stylesheet">
    <style>
        /* General body styles */
        body {
            font-family: 'Lato', sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        /* Container styles */
        .container {
            max-width: 800px;
            width: 90%;
            /* Adjusted to a percentage for responsiveness */
            margin: auto;
            /* Center the container horizontally */
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }


        /* Server list styles */
        .server-list ul {
    list-style-type: none;
    padding: 0;
}

.server-list li {
    margin-bottom: 8px; /* Reduced from 10px for tighter spacing */
}

.server-list li a {
    display: block;
    padding: 12px;
    text-decoration: none;
    color: #333;
    background-color: #f0f0f0;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.server-list li a:hover {
    background-color: #e0e0e0;
}


        /* Error and info messages */
        .message {
    text-align: center;
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
}

.error {
    color: red;
    font-weight: bold;
    background-color: #ffd9d9;
}

.info {
    color: green;
    font-weight: bold;
    background-color: #ccffcc;
}
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }
    .server-list li a {
        padding: 10px;
    }
}

    </style>
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