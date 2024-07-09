<?php
// Informations de connexion à la base de données
include "../../../module/db.php";

// Récupérer les données du formulaire
$name = $_POST['name'];
$location = $_POST['location'];
$ram = $_POST['user'];
$image = $_POST['image'];
$port = $_POST['port'];
$intport = $_POST['intport'];

// Requête à node
$stmt = $conn->prepare("SELECT ip, token FROM nodes WHERE id = ?");
$stmt->bind_param("s", $location);

// Exécuter la requête
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($ip, $token);
$stmt->fetch();
$curl = curl_init();

$url = "http://$ip/create_server?port=$port&name=$name";
if (!empty($image)) {
    $url .= "&image=$image";
}if (!empty($intport)) {
    $url .= "&intport=$intport";
}

curl_setopt_array($curl, array(
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
        "Authorization: $token"
    ),
    CURLOPT_TIMEOUT => 50
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
$data = json_decode($response, true);
echo $response;
if ($err) {
    echo "cURL Error #:" . $err;
} else {
   
    $irl = $data["host_ip"] . ":" . $port;

    // Préparer et exécuter la requête d'insertion
    $sql = "INSERT INTO servers (name, uuid, users, nodesid, connectionip) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $data["container_id"], $ram, $location, $irl);

    if ($stmt->execute()) {
        echo "Nouveau enregistrement créé avec succès";
        header("Location: /admin/servers");
        exit();
    } else {
        echo "Erreur: " . $sql . "<br>" . $conn->error;
    }

    // Fermer la connexion
    $stmt->close();
}
$conn->close();
?>
