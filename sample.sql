-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 27, 2022 at 01:52 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(128) DEFAULT NULL,
  `text` varchar(999) DEFAULT NULL,
  `author` varchar(128) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `text`, `author`) VALUES
(20, 'My first note', '<h3>This is the first note created.&nbsp;</h3>\n<p>I can use Paragraph&nbsp;</p>\n<h4>or a heading</h4>\n<p>I can use&nbsp;<span style=\"color: rgb(224, 62, 45);\">different&nbsp;<span style=\"color: rgb(132, 63, 161);\">colors&nbsp;<span style=\"color: rgb(45, 194, 107);\">if&nbsp;<span style=\"color: rgb(35, 111, 161);\">I&nbsp;<span style=\"color: rgb(230, 126, 35);\">want.</span></span></span></span></span></p>', 'test'),
(21, 'My second note', '<p>This is the second note. You can write whatever you want even in&nbsp;<strong>bold&nbsp;</strong>or&nbsp;<em>cursive&nbsp;</em>or&nbsp;both.</p>\n<p style=\"padding-left: 40px;\">You can do many things</p>\n<ol>\n<li style=\"text-align: left;\">Make lists</li>\n<li style=\"text-align: left;\">of many things with both numbers</li>\n</ol>\n<ul>\n<li>Or with</li>\n<li>dots</li>\n</ul>\n<ol style=\"list-style-type: upper-alpha;\">\n<li>There are many types of lists to choose from</li>\n<li>This is row B</li>\n</ol>\n<p>&nbsp;</p>', 'test'),
(22, 'Third note', '<p>I also want to show you that</p>\n<p style=\"text-align: center;\">you can place text in the middle</p>\n<p style=\"text-align: right;\">to the right</p>\n<p style=\"text-align: left;\">and to the left if you please</p>', 'test'),
(23, 'What can you do? ', '<p>You can open any of my notes by pressing on the title on any of them.&nbsp;</p>\n<p>If you do just press&nbsp;<strong>edit</strong> and you can change my notes however you want.&nbsp;</p>\n<p>And if you want you can&nbsp;<strong>delete&nbsp;</strong>my notes by pressing the delete note button</p>\n<p><strong>But you can also</strong> create your own note by pressing the&nbsp;<strong>create new note&nbsp;</strong>button on the top of this page!</p>', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(11, 'test', 'test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
