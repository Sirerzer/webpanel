<?php
include '../../module/db.php';

// Vérifier si l'utilisateur est administrateur
$stmt = $conn->prepare("SELECT id, mail, mdp, adminlevel, token FROM user WHERE token = ?");
if ($stmt === false) {
    echo "Erreur de préparation de la requête : " . $conn->error;
    exit();
}
$stmt->bind_param("s", $_COOKIE['token']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $mail, $mdp, $adminlevel, $token);
$stmt->fetch();

if ($adminlevel !== 1) {
    exit('Vous n\'êtes pas autorisé à effectuer cette action.');
}

// Vérifier si l'ID est défini dans la requête POST
if (isset($_POST['id'])) {
    $id = $_POST['id'];

    // Préparer et exécuter la requête de suppression
    $sql = "DELETE FROM nodes WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt === false) {
        echo "Erreur de préparation de la requête : " . $conn->error;
        exit();
    }
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Enregistrement supprimé avec succès.";
    } else {
        echo "Erreur : " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
} else {
    echo "ID non spécifié.";
}

$conn->close();
?>