DROP TABLE IF EXISTS vehicle;

CREATE TABLE cook (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  fullName VARCHAR(255) NULL,
  distinctions VARCHAR(255) NULL,
  menu VARCHAR(255) NULL,
  picture VARCHAR(255) NULL,
  menupicture VARCHAR(255) NULL,
  price VARCHAR(255) NULL,
  quote VARCHAR(255) NULL,
  localisation VARCHAR(255) NULL,
  isAvailable TINYINT NULL,
-- ENGINE = InnoDB;
);

INSERT INTO cook (fullName, distinctions, menu, picture, menupicture, price, quote, localisation, isAvailable) VALUES ('Philippe Etchebest','2 étoiles au guide Michelin', 'blanquette de veau','../frontend/src/assets/philippeetchebest.jpg','../frontend/src/assets/blanquette.jpg', '250 euros', 'Ma devise est de se faire plaisir dans tout ce que lon fait, dêtre sincère et déterminé, et davoir lamour du travail bien fait.', 'Paris', '1'),;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  city VARCHAR(80) NULL,
  phone VARCHAR(20) NULL,
  hashedPassword VARCHAR(100) NOT NULL,
  isAdmin TINYINT NULL,
  avatar VARCHAR(255) NULL,
  date_creation DATETIME NOT NULL DEFAULT NOW(),
  cook_id INT,
  -- CONSTRAINT `fk_user_vehicule`
  FOREIGN KEY (cook_id) REFERENCES cook (id)
);

INSERT INTO user (firstname, lastname, email, city, phone, hashedPassword, isAdmin, avatar, date_creation, cook_id) VALUES ('Pierre', 'Thomas', 'pierre.thomas@gmail.com', 'Lyon', '0600000000', '$argon2id$v=19$m=65536,t=5,p=1$n0d+QZC50J4zxh96zq0FDw$Qtfc4rjgLIlcJJ9iipQ2lNwPDIPTOx/YX/5JNdxSVZg', '1', 'monavatar1.png', '2022-10-18 12:12:23', '1');


