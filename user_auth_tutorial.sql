-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Oct 31, 2015 at 10:42 PM
-- Server version: 5.5.42
-- PHP Version: 5.6.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `user_auth_tutorial`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `token` text NOT NULL

) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `email`, `password`) VALUES
(1, 'test@test.com', 'test'),
(2, 'test2', 'testers'),
(3, 'testers2@test.com', 'test'),
(4, 'testers3@test.com', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE TABLE `cancion` (
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `nombre` text COLLATE utf8_bin NOT NULL,
 `artista` text COLLATE utf8_bin NOT NULL,
 `ruta` text COLLATE utf8_bin NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin

CREATE TABLE `categoria` (
 `idu` int(11) NOT NULL,
 `idc` int(11) NOT NULL,
 `animo` float NOT NULL,
 `rock_reg` float NOT NULL,
 `rock_pop` float NOT NULL,
 `rock_ska` float NOT NULL,
 `rock_jazz` float NOT NULL,
 `reg_pop` float NOT NULL,
 `reg_ska` float NOT NULL,
 `reg_jazz` float NOT NULL,
 `pop_ska` float NOT NULL,
 `pop_jazz` float NOT NULL,
 `ska_jazz` float NOT NULL,
 PRIMARY KEY (`idu`,`idc`),
 KEY `idc` (`idc`),
 CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`idu`) REFERENCES `users` (`userId`),
 CONSTRAINT `categoria_ibfk_2` FOREIGN KEY (`idc`) REFERENCES `cancion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin



INSERT INTO `cancion` (`id`, `nombre`, `artista`, `ruta`) VALUES (NULL, 'cancion 1', 'Kalimba', 'C:\\xampp\\htdocs\\Usach-tesis-\\audios\\Kalimba.mp3.mp3');

INSERT INTO `cancion` (`id`, `nombre`, `artista`, `ruta`) VALUES (NULL, 'cancion 2', 'Manu chao ', 'C:\\xampp\\htdocs\\Usach-tesis-\\audios\\Manu Chao - A Cosa (1).mp3.mp3');

select avg(rock_reg) rock_reg,avg(rock_pop) rock_pop ,avg(rock_ska) rock_ska,avg(rock_jazz) rock_jazz,avg(reg_pop) reg_pop,avg(reg_ska) reg_ska,avg(reg_jazz) reg_jazz,avg(pop_ska) pop_ska,avg(pop_jazz) pop_jazz,avg(ska_jazz) ska_jazz from categoria



