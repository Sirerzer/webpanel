<?php
include 'db.php';
session_start();
$nodesid = $_GET['nodesid'];


        
      
            // Mot de passe correct, démarrer la session et créer un cookie crypté
            $stmt = $conn->prepare("SELECT ip , name , token FROM nodes WHERE id = ?");
            if ($stmt === false) {
                echo "Erreur de préparation de la requête : " . $conn->error;
                exit();
            }
        
            // Lier les paramètres
            $stmt->bind_param("s", $nodesid);
        
            // Exécuter la requête
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($ip,$name,$token);
            $stmt->fetch();
    
// Check if action is set in $_GET
if (isset($_GET['action'])) {
    // Initialize cURL
    $ch = curl_init();

    // Base URL for the API endpoint
    $base_url = "http://$ip/server/" . $_GET['uuid'];

    // Set common cURL options
    curl_setopt_array($ch, array(
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => array(
            "Accept: application/json",
        ),
    ));

    // Determine the action based on $_GET['action']
    switch ($_GET['action']) {
        case "on":
            curl_setopt($ch, CURLOPT_URL, $base_url . "/start");
            break;
        case "reon":
            curl_setopt($ch, CURLOPT_URL, $base_url . "/restart");
            break;
        case "off":
            curl_setopt($ch, CURLOPT_URL, $base_url . "/stop");
            break;
        case "kill":
            curl_setopt($ch, CURLOPT_URL, $base_url . "/kill");
            break;
        default:
            // Handle invalid action
            die("Invalid action.");
    }
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: ". $token
    ]);
    // Execute the cURL request
    $response = curl_exec($ch);
    $err = curl_error($ch);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        echo $response;
    }

    // Close cURL resource
    curl_close($ch);
} else {
    // Handle case where $_GET['action'] is not set
    die("No action specified.");
}
?>
