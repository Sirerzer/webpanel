<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
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
</head>
<body>
<div class="container">
  <div>
    <form method="post">
      
        <input type="email" name="mail" id="mail" required><br><br>
        
        <input type="password" name="password" id="password" required><br><br>
        <button class="log" name='submit' type='submit'>Login</button><br><br>
        <button class="reg" onclick="window.location.href='/auth/register'">T'es nouveau ?</button>
        <p>Made with <span>❤</span> by <a href="https://www.instagram.com/rzkytmgr/">@rzkytmgr</a>.</p>
    </form>
    </div>
</div>
	<?php
// Fonction pour crypter l'UUID
function encrypt_uuid($uuid, $key) {
    return base64_encode(openssl_encrypt($uuid, 'aes-256-cbc', $key, 0, substr($key, 0, 16)));
}

// Fonction pour décrypter l'UUID
function decrypt_uuid($encrypted_uuid, $key) {
    return openssl_decrypt(base64_decode($encrypted_uuid), 'aes-256-cbc', $key, 0, substr($key, 0, 16));
}

// Clé de chiffrement/
$encryption_key = "jdfj/ksdqj*&jkuhfdshuihuiodfhiuoqdsfhuiosdfqhuigohuioFGFGIGYOUFgyiuodBFHUBUIDQSBQUVHBBUYOSDQDBYUHUIOQSDFHUIYDUISHQHUIFSDQHUIHUFISDQHUIDFQSDHUIYUZEQRHUIZEHRIUHDVSQIUHIUDQSHUIFHIUDSQYFHGUIYDFIOUDQSHFQDSHUIHSDQIUVHIUQDSHFGIUSDGQFIUOSDQGHFYUIZETGR8SDGHDFIUGDSQUIFGODSIUQFGIUDSGHU9GHYERIU9HZERYT8ZE7HYFIOPDUSHF8USDHF8OQGPUSDGFUISDBHLGIUHGOSDIUQFH989défsjlk's(fdljkj-klsdqfnèjksqdq_hijqhçsdfuiç!l:;!:;;:!:;:;!jfusdqjiishdfiuhsfdq.jkhsdqfjkhjksqfdhkjsqhfiuhezuihzui154#//*/*hiuazehtguiaghfuih"; // Changez ceci par une clé secrète unique et sécurisée

// Démarrer la session
session_start();

// Vérifier si l'utilisateur a déjà un cookie d'authentification
if (isset($_COOKIE['user_uuid'])) {
    $_SESSION["uuid"] = decrypt_uuid($_COOKIE['user_uuid'], $encryption_key);
     header("Location: /dashboard/");
    exit();
}

if (isset($_POST["submit"])) {
    $email = filter_var($_POST["mail"], FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit() ;
    }

    // Connexion à la base de données
    include '../../module/db.php';

    // Préparer la requête SQL pour vérifier l'utilisateur
    $stmt = $conn->prepare("SELECT id, mdp FROM user WHERE mail = ?");
    if ($stmt === false) {
        echo "Erreur de préparation de la requête : " . $conn->error;
        exit();
    }

    // Lier les paramètres
    $stmt->bind_param("s", $email);

    // Exécuter la requête
    $stmt->execute();
    $stmt->store_result();

    // Vérifier si l'utilisateur existe
    if ($stmt->num_rows > 0) {
        // Associer les résultats
        $stmt->bind_result($id, $hashedPassword);
        $stmt->fetch();

        // Vérifier le mot de passe
        if (password_verify($password, $hashedPassword)) {
            // Mot de passe correct, démarrer la session et créer un cookie crypté
            $stmt = $conn->prepare("SELECT id,uuid,users,nodesid FROM servers WHERE users = ?");
            if ($stmt === false) {
                echo "Erreur de préparation de la requête : " . $conn->error;
                exit();
            }
        
            // Lier les paramètres
            $stmt->bind_param("s", $email);
        
            // Exécuter la requête
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($id, $uuid, $users,$nodesid);
            $stmt->fetch();
            // Définir un cookie pour une durée de 30 jours (30*24*60*60 secondes)
            setcookie("user_uuid", $uuid, time() + (30 * 24 * 60 * 60), "/");

            echo "Connexion réussie!";
            // Rediriger vers la page protégée
            header("Location: /dashboard/");
            exit();
        } else {
            echo "Mot de passe incorrect.";
        }
    } else {
        echo "Aucun utilisateur trouvé avec cet email.";
    }

    // Fermer la connexion
    $stmt->close();
    $conn->close();
}
?>

</body>
</html>
