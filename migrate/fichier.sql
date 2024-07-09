-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 09 juil. 2024 à 12:19
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `atersir_web`
--

-- --------------------------------------------------------

--
-- Structure de la table `db`
--

CREATE TABLE `db` (
  `id` int(11) NOT NULL,
  `DB_URL` varchar(255) NOT NULL,
  `DB_PORT` int(11) NOT NULL,
  `DB_NAME` varchar(255) NOT NULL,
  `DB_USER` varchar(255) NOT NULL,
  `DB_PASS` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `docker`
--

CREATE TABLE `docker` (
  `id` int(19) NOT NULL,
  `name` varchar(255) NOT NULL,
  `imagename` varchar(255) NOT NULL,
  `root` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `docker`
--

INSERT INTO `docker` (`id`, `name`, `imagename`, `root`) VALUES
(1, 'Nginx', 'richarvey/nginx-php-fpm', '/');

-- --------------------------------------------------------

--
-- Structure de la table `nodes`
--

CREATE TABLE `nodes` (
  `id` int(19) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tags` varchar(255) NOT NULL,
  `ram` int(18) NOT NULL,
  `disk` int(18) NOT NULL,
  `token` varchar(255) NOT NULL,
  `ip` text NOT NULL,
  `server` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `nodes`
--

INSERT INTO `nodes` (`id`, `name`, `tags`, `ram`, `disk`, `token`, `ip`, `server`) VALUES
(1, 'Node-01', 'monde', 32, 1024, 'shjidfhuihuihgfsidbu', '194.145.127.13:5000', 0);

-- --------------------------------------------------------

--
-- Structure de la table `servers`
--

CREATE TABLE `servers` (
  `id` int(19) NOT NULL,
  `name` varchar(255) NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `users` varchar(255) NOT NULL,
  `nodesid` int(11) NOT NULL DEFAULT 1,
  `connectionip` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `servers`
--

INSERT INTO `servers` (`id`, `name`, `uuid`, `users`, `nodesid`, `connectionip`) VALUES
(15, 'ert', '55489b95e9c157b3883e7e28687c54ee47e499f10828982f31665a5290e23836', 'yo@gmail.comsqd', 1, '0.0.0.0:15445'),
(16, 'dhfgdfghdhgbgjgh', 'b080a24d9668ae7ae1b3be6fd4ae0a98e63d26a3bc3b777021d6551f221fe8d9', 'yo@gmail.comsqd', 1, '0.0.0.0:8800'),
(17, 'server.jar', 'ad4a2c8d02d852dbc06715097d568adc2388f76db4ae399871dd36be784684ce', 'yo@gmail.comsqd', 1, '0.0.0.0:3801'),
(18, 'server.jar', 'd3ac1cf164a6195017aff25b6b65e4c53174972fbe6dac9581170bcdf636fa35', 'yo@gmail.comsqd', 1, '0.0.0.0:5001'),
(19, 'test', '8c3ad2454d913b4b9d88fc595ea9719c6c1afd4885ca3dfd74b4f31009355526', 'yo@gmail.comsqd', 1, '0.0.0.0:44744'),
(20, 'efrg', '09e5c590846ea5d1cc17e0cdf86d5453349cf2049dee5c6273183bb8cb02ba24', 'yo@gmail.comsqd', 1, '0.0.0.0:5023'),
(21, 'hdrd', '3077adebd0610a3eed16b25b1d7db7ef50b088947e189b58262a8295ddc87d35', 'yo@gmail.comsqd', 1, '0.0.0.0:21445'),
(22, 'test', '1d7d9dff29d99a79b80bc3a5d6293ef9b7fd5f06d4974e94c41ed08fdbcd251c', 'yo@gmail.comsqd', 1, '0.0.0.0:21489'),
(23, 'server.jar', 'a0ec12036c80656df37684893c1687c39a3b45417ba065610f85608809855ecf', 'yo@gmail.comsqd', 1, '0.0.0.0:21447');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(99) NOT NULL,
  `pseudo` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `mdp` varchar(255) NOT NULL,
  `adminlevel` int(11) NOT NULL DEFAULT 0,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `pseudo`, `mail`, `mdp`, `adminlevel`, `token`) VALUES
(45, 'sir_200', 'yo@gmail.comsqd', '$2y$10$22TkxiHu32ycCn35dUyACutQkzsR5TqHMnXwIUxG4GC8zQT.WguMG', 1, 'hijusfhgiuhsgd');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `db`
--
ALTER TABLE `db`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `docker`
--
ALTER TABLE `docker`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `nodes`
--
ALTER TABLE `nodes`
  ADD PRIMARY KEY (`id`,`name`,`ram`,`tags`,`disk`);

--
-- Index pour la table `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`,`mdp`) USING BTREE,
  ADD UNIQUE KEY `mail` (`mail`) USING BTREE;

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `db`
--
ALTER TABLE `db`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `docker`
--
ALTER TABLE `docker`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `nodes`
--
ALTER TABLE `nodes`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `servers`
--
ALTER TABLE `servers`
  MODIFY `id` int(19) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(99) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
