<?php
include '../module/db.php';
// Assurez-vous que cURL est activé sur votre serveur PHP
if (!function_exists('curl_init')) {
    die('cURL is not enabled. Please enable it to use this script.');
}

// Récupérer les données POST
$con = isset($_POST['con']) ? $_POST['con'] : '';
$uuid = $_POST['uuid'];
$url = $_POST['nodeurl'];
$path = $_POST['path'];
$id = $_POST['nodeid'];
// URL de l'endpoint

$stmt = $conn->prepare("SELECT ip , name , token FROM nodes WHERE id = ?");
if ($stmt === false) {
    echo "Erreur de préparation de la requête : " . $conn->error;
    exit();
}

// Lier les paramètres
$stmt->bind_param("s", $id);

// Exécuter la requête
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($ip,$name,$token);
$stmt->fetch();
$con = isset($_POST['con']) ? $_POST['con'] : '';
$uuid = $_POST['uuid'];
$url = $_POST['nodeurl'];
$path = $_POST['path'];
$id = $_POST['nodeid'];
$url = "http://$url/files/$uuid$path";
// Initialiser une session cURL
$ch = curl_init($url);

// Configurer les options cURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['content' => $con]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: '.$token // Si un token est nécessaire
]);

// Exécuter la requête et récupérer la réponse
$response = curl_exec($ch);

// Vérifier les erreurs cURL
if ($response === false) {
    echo 'cURL Error: ' . curl_error($ch);
} else {
    // Afficher la réponse de l'API
    $test = str_replace('/usr/share/nginx/html/', '', $path);
    echo 'Response from API: ' . $response;
    header("Location: /server/$uuid/files/$test");
    exit();
}

// Fermer la session cURL
curl_close($ch);
?>
