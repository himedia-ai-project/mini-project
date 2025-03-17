-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.6.21-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- food 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `food`;
CREATE DATABASE IF NOT EXISTS `food` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci */;
USE `food`;

-- 테이블 test.agewarnings 구조 내보내기
CREATE TABLE IF NOT EXISTS `agewarnings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `type` enum('ADVICE','AGE_WARNING') DEFAULT 'AGE_WARNING',
  PRIMARY KEY (`id`),
  KEY `FK4pp9x2t6hp2iuued8nnfcanv3` (`user_id`),
  CONSTRAINT `FK4pp9x2t6hp2iuued8nnfcanv3` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- 테이블 데이터 test.agewarnings:~0 rows (대략적) 내보내기

-- 테이블 test.compatibility 구조 내보내기
CREATE TABLE IF NOT EXISTS `compatibility` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `type` enum('EVALUATION','NEGATIVE','POSITIVE') DEFAULT 'EVALUATION',
  PRIMARY KEY (`id`),
  KEY `FKdr7xug4weug3y6u3fo7fwyygp` (`user_id`),
  CONSTRAINT `FKdr7xug4weug3y6u3fo7fwyygp` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- 테이블 데이터 test.compatibility:~0 rows (대략적) 내보내기

-- 테이블 test.ingredients 구조 내보내기
CREATE TABLE IF NOT EXISTS `ingredients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` tinytext NOT NULL,
  `ingredient_name` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK15s38vm2tgswwc1mlrioke72s` (`user_id`),
  CONSTRAINT `FK15s38vm2tgswwc1mlrioke72s` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- 테이블 데이터 test.ingredients:~0 rows (대략적) 내보내기

-- 테이블 test.totalresult 구조 내보내기
CREATE TABLE IF NOT EXISTS `totalresult` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` longtext DEFAULT NULL,
  `type` enum('GOOD','BAD','RESULT') DEFAULT 'RESULT',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_totalresult_userinfo` (`user_id`),
  CONSTRAINT `FK_totalresult_userinfo` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- 테이블 데이터 test.totalresult:~0 rows (대략적) 내보내기

-- 테이블 test.userinfo 구조 내보내기
CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `age` int(11) NOT NULL,
  `issue` varchar(255) DEFAULT NULL,
  `object` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- 테이블 데이터 test.userinfo:~0 rows (대략적) 내보내기

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
