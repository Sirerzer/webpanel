<?php
session_start();

// URL de votre API Flask
$api_url = 'http://194.145.127.13:5000/server/'.$_SESSION["uuid"].'/upload';

// Récupérer les données du formulaire
$uuid = $_SESSION['uuid'];
$upload_path = $_POST['upload_path'] ?? '/';
$files = $_FILES['files'];

// Vérifier si tous les champs requis sont présents
if (!isset($uuid) || empty($uuid) || !isset($files) || !is_array($files['name'])) {
    die('Error: Missing required fields or files array.');
}

// Initialiser la session cURL
$curl = curl_init();

// Créer un tableau pour les données à envoyer
$postData = [
    'uuid' => $uuid,
    'upload_path' => $upload_path
];

// Ajouter chaque fichier à envoyer au tableau
foreach ($files['name'] as $index => $fileName) {
    $fileTmpPath = $files['tmp_name'][$index];
    $fileType = $files['type'][$index];
    $postData["file{$index}"] = new CURLFile($fileTmpPath, $fileType, $fileName);
}

// Configurer les options de la requête POST vers l'API Flask
curl_setopt_array($curl, [
    CURLOPT_URL => $api_url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $postData,
]);

// Exécuter la requête cURL et récupérer la réponse
$response = curl_exec($curl);
$http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);

// Vérifier les erreurs de cURL et afficher la réponse
if ($response === false) {
    echo 'Error: ' . curl_error($curl);
} else {
    echo "HTTP Status Code: $http_status<br>";
    echo "API Response: <pre>" . htmlspecialchars($response) . "</pre>";
}

// Fermer la session cURL
curl_close($curl);
?>
