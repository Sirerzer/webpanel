<?php
include './module/db.php';
// Vérifier la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}

// Créer la base de données
$sql = "CREATE DATABASE IF NOT EXISTS $database";
if ($conn->query($sql) === TRUE) {
    echo "Base de données créée avec succès\n";
} else {
    echo "Erreur lors de la création de la base de données: " . $conn->error . "\n";
}

// Sélectionner la base de données
$conn->select_db($database);

// Définir les commandes SQL
$sql = "
SET SQL_MODE = 'NO_AUTO_VALUE_ON_ZERO';
START TRANSACTION;
SET time_zone = '+00:00';

CREATE TABLE IF NOT EXISTS `nodes` (
  `id` int(19) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `ram` int(18) NOT NULL,
  `disk` int(18) NOT NULL,
  `ip` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `servers` (
  `id` int(19) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `users` varchar(255) NOT NULL,
  `nodesid` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(99) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `idserver` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `nodes`
  ADD PRIMARY KEY (`id`, `name`, `ram`, `location`, `disk`);

ALTER TABLE `servers`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`, `mdp`) USING BTREE,
  ADD UNIQUE KEY `mail` (`mail`, `idserver`) USING BTREE;

ALTER TABLE `nodes`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `servers`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `user`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

COMMIT;
";

// Exécuter les commandes SQL
if ($conn->multi_query($sql) === TRUE) {
    echo "Migré avec succé\n";
} else {
    echo "Erreur lors de la création des tables: " . $conn->error . "\n";
}

// Fermer la connexion
$conn->close();
?>
