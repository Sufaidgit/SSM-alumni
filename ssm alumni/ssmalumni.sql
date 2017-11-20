-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 30, 2017 at 01:53 PM
-- Server version: 5.5.20
-- PHP Version: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ssmalumni`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE IF NOT EXISTS `registration` (
  `id` bigint(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) DEFAULT NULL,
  `department` varchar(500) DEFAULT NULL,
  `year` varchar(500) DEFAULT NULL,
  `stream` varchar(500) DEFAULT NULL,
  `contact` bigint(255) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `district` varchar(500) DEFAULT NULL,
  `e_country` varchar(500) DEFAULT NULL,
  `a_contact` varchar(500) DEFAULT NULL,
  `website` varchar(500) DEFAULT NULL,
  `status` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`id`, `name`, `department`, `year`, `stream`, `contact`, `email`, `district`, `e_country`, `a_contact`, `website`, `status`) VALUES
(4, 'muhammed faisal tp', 'Computer', '2016', 'Regular', 9562793946, 'faisaltptri@gmail.com', 'Malappuram', NULL, '', '', 'Rejected'),
(5, 'deepak', 'Computer', '2016', 'Regular', 9562356326, 'faisaltptri@gmail.com', 'Malappuram', 'India (à¤­à¤¾à¤°à¤¤)', '+93 2363656523', 'http://hhh.com', 'Under Verification'),
(6, 'vgdfgdfg', 'Computer', '2010', 'Regular', 3432333333, 'faisaltptri@gmail.com', 'Malappuram', 'India (à¤­à¤¾à¤°à¤¤)', '', '', 'Under Verification'),
(7, 'dfdf', 'Civil', '2010', 'Regular', 3434333333, 'faisaltptri@gmail.com', 'Calicut', 'India (à¤­à¤¾à¤°à¤¤)', '+93 ', '', 'Under Verification'),
(8, 'gfhhh', 'Computer', '2011', 'Regular', 4545454545, 'faisaltptri@gmail.com', 'Calicut', 'India (à¤­à¤¾à¤°à¤¤)', '+44 ', '', 'Under Verification'),
(9, 'dffgdfd', 'Civil', '2011', 'Regular', 4545454545, 'faisaltptri@gmail.com', 'Calicut', 'India (à¤­à¤¾à¤°à¤¤)', '+44 232123212', '', 'Under Verification'),
(10, 'nibal', 'Computer', '2016', 'Regular', 9562356363, 'faisaltptri@gmail.com', 'Malappuram', 'India (à¤­à¤¾à¤°à¤¤)', '', '', 'Under Verification');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
