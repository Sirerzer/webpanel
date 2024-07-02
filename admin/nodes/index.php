<?php 
require "../../module/db.php";

// Préparer la requête SQL pour vérifier l'utilisateur
$stmt = $conn->query("SELECT * FROM `nodes` WHERE 1");

if ($stmt->num_rows > 0) {
    // Fetch all rows as an associative array
    $rows = $stmt->fetch_all(MYSQLI_ASSOC);
    
    // Début de la table HTML
    echo "<table border='1'>";
    
    // Afficher l'en-tête de la table
    echo "<tr>";
    foreach (array_keys($rows[0]) as $header) {
        echo "<th>" . htmlspecialchars($header) . "</th>";
    }
    echo "<th>curl</th>"; // Ajouter une colonne pour le résultat de curl
    echo "</tr>";
    
    // Afficher les données de chaque ligne
    foreach ($rows as $row) {
        echo "<tr>";
        foreach ($row as $key => $cell) {
            if ($key == 'ip') {
                // Afficher l'IP en gras
                echo "<td><strong>" . htmlspecialchars($cell) . "</strong></td>";
            } else {
                echo "<td>" . htmlspecialchars($cell) . "</td>";
            }
        }

        // Effectuer la requête curl sur l'adresse IP
        $ip = $row['ip'];
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, "http://$ip/node/status"); // URL de l'IP
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);

        // Afficher le résultat de curl
        if ($response === false) {
            echo "<td>Erreur de curl</td>";
        } else {
            echo "<td>" . htmlspecialchars($response) . "</td>";
        }

        echo "</tr>";
    }
    
    // Fin de la table HTML
    echo "</table>";
} else {
    echo "No rows found.";
}
