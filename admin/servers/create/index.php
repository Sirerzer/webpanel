<?php 
include '../../../module/db.php';

$stmt = $conn->prepare("SELECT id,mail,mdp,adminlevel,token FROM user WHERE token = ?");
            if ($stmt === false) {
                echo "Erreur de préparation de la requête : " . $conn->error;
                exit();
            }
        
            // Lier les paramètres
            $stmt->bind_param("s", $_COOKIE['token']);
        
            // Exécuter la requête
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($id, $mail, $mdp,$adminlevel,$token);
            $stmt->fetch();
if( $adminlevel === 1){
    
}else{
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ajouter des informations</title>
</head>
<body>
    <form action="insert.php" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="location">Node ID:</label>
        <input type="text" id="location" name="location" required><br>

        <label for="ram">RAM:</label>
        <input type="text" id="ram" name="ram" required><br>

        <label for="disk">Disk:</label>
        <input type="text" id="disk" name="disk" required><br>

        

        <label for="port">Port:</label>
        <input type="text" id="port" name="port" required><br>

        <input type="submit" value="Submit">
    </form>
</body>
</html>
