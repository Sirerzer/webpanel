<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
</head>
<body>
    <style>
        form{
            
        
            position: absolute;
            top: 50%;
            /* Position verticale au milieu du conteneur parent */
            left: 50%;
            /* Position horizontale au milieu du conteneur parent */
            transform: translate(-20%, -15%);
            border-radius: .375rem !important;
            /*background-color: rgba(255, 255, 255, 1) !important;*/
            /* if run #5cdb5c.. stop/suppendu ff0021 demarre ffff00 install #ffa500	*/
            padding: 10px;
          
            box-shadow: 2px 2px 5px #0003;

        
        }
        body {
            border: none 0px;

            display: contents;
            background: #f7f7f7;
            color: black;
        }

        body {
  border: 0;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: rgba(250, 250, 250)
}

.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
}

.container div > p span {
  color: red;
}

p {
  position: relative;
  top: 30px;
}

p a {
  color: black;
  text-decoration: none;
}

button {
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  font-weight: 600;
  margin: 0 10px;
  width: 200px;
  padding: 10px 0;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.2);
  transition: 0.4s;
}

.reg {
  color: white;
  background-color: rgba(104, 85, 224, 1);
}

.log {
  color: rgb(104, 85, 224);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(104, 85, 224, 1);
}

button:hover {
  color: white;
  width:200px;
  box-shadow: 0 0 20px rgba(104, 85, 224, 0.6);
  background-color: rgba(104, 85, 224, 1);
}
input{
    border: solid 1px;
    border-radius: 5px;
    height: 20px;
}


    </style>
        <div class="container">
  <div>   
    <form method="post">
        

        <input type="email" name="mail" id="mail" placeholder="E-mail" required><br><br>
 
        <input type="password" name="password" id="password" placeholder="Password" required><br><br><br>
 
    <button class="reg" type="submit" name="submit">Sign up</button><br><br>
    <button class="log" onclick="window.location.href='login.php'">Ta deja un compte ?</button>
    <p>Made with <span>❤</span> by <a href="https://www.instagram.com/rzkytmgr/">@rzkytmgr</a>.</p>
  </div>
</div>
    </form>

    <?php
    if (isset($_POST["submit"])) {
        $email = filter_var($_POST["mail"], FILTER_SANITIZE_EMAIL);
        $password = $_POST["password"];

        // Validate email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format";
            exit;
        }

        // Chemin vers le script Python
        

        // Nettoyer et vérifier la sortie
      

        // Fonction pour envoyer une requête curl et récupérer la réponse
        function sendCurlRequest($url) {
            $curl = curl_init();
        
            curl_setopt_array($curl, [
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET",
            ]);
        
            $response = curl_exec($curl);
            $err = curl_error($curl);
        
            curl_close($curl);
        
            if ($err) {
                echo "Erreur cURL : " . $err;
                exit;
            } else {
                return $response;
            }
        }
        
        // Générer un port aléatoire entre 49152 et 65535
        $port = rand(49152, 65535);
        
        // URL pour la requête curl avec le port aléatoire
        $serverCreationUrl = 'http://194.145.127.13:5000/create_server?port=' . $port;
        
        // Envoyer la requête curl pour créer le serveur
        $output = sendCurlRequest($serverCreationUrl);
        
        // Vérifier et traiter la réponse JSON
        $output = trim($output);
        
        if (empty($output)) {
            echo "Erreur : l'identifiant du serveur est vide.";
            exit;
        }
        
        // Décoder la réponse JSON
        $response = json_decode($output, true);
        
        // Vérifier si le décodage JSON a réussi
        if ($response === null && json_last_error() !== JSON_ERROR_NONE) {
            echo "Erreur lors du décryptage de la réponse JSON.";
            exit;
        }
        
        // Afficher les détails du serveur créé
        echo "Détails du serveur créé :\n";
        echo "ID du conteneur : " . $response['container_id'] . "\n";
        echo "IP de l'hôte : " . $response['host_ip'] . "\n";
        echo "Image : " . $response['image'] . "\n";
        echo "Message : " . $response['message'] . "\n";
        echo "Port : " . $response['port'] . "\n";
        
        $output =  $response['container_id'];
        // Connexion à la base de données
        include '../../module/db.php';

        // Hacher le mot de passe
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Préparer la requête SQL
        $stmt = $conn->prepare("INSERT INTO user (mail, mdp) VALUES (?, ?)");
        if ($stmt === false) {
            echo "Erreur de préparation de la requête : " . $conn->error;
            exit;
        }

        // Lier les paramètres
        $stmt->bind_param("ss", $email, $hashedPassword);

        // Exécuter la requête
        if ($stmt->execute()) {
            echo "Nouveau enregistrement créé avec succès";
        } else {
            echo "Erreur : " . $stmt->error;
        }





        $stmt = $conn->prepare("INSERT INTO servers (uuid, users) VALUES (?, ?)");
        if ($stmt === false) {
            echo "Erreur de préparation de la requête : " . $conn->error;
            exit;
        }

        // Lier les paramètres
        $stmt->bind_param("ss", $output, $email);

        // Exécuter la requête
        if ($stmt->execute()) {
            echo "Nouveau enregistrement créé avec succès";
        } else {
            echo "Erreur : " . $stmt->error;
        }

        // Fermer la connexion
        $stmt->close();
        $conn->close();
        // Démarrer la session et enregistrer l'identifiant
        session_start();
        $_SESSION["uuid"] = $output;
        header("Location: /auth/login");
            exit();
    }

    ?>
</body>
</html>
