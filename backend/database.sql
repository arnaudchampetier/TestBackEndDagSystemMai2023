
DROP TABLE IF EXISTS cook;

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
  isAvailable TINYINT NULL
-- ENGINE = InnoDB; 
);

INSERT INTO cook (fullName, distinctions, menu, picture, menupicture, price, quote, localisation, isAvailable) VALUES 

('Philippe Etchebest','2 étoiles au guide Michelin', 'blanquette de veau','src/assets/philippeetchebest.jpg','src/assets/blanquette.jpg', '250 euros', '"Ma devise est de se faire plaisir dans tout ce que lon fait, dêtre sincère et déterminé, et davoir lamour du travail bien fait."', 'Paris', '1'),

('Gordon Ramsay','3 étoiles au guide Michelin', 'coq au vin','src/assets/gordonramsay.jpg','src/assets/coqauvin.jpg', '300 euros', '"La cuisine, cest tout simplement un mode de vie."', 'Londres', '1'),


('Julia Child','1 étoile au guide Michelin', 'boeuf bourguignon','src/assets/juliachild.jpg','src/assets/boeufbourguignon.jpg', '200 euros', '"Ce nest pas parce que vous ratez une recette une fois que vous êtes un mauvais cuisinier. Cest en la ratant plusieurs fois que vous devenez un bon cuisinier."', 'Paris', '1'),

('Jamie Oliver','2 étoiles au guide Michelin', 'paella','src/assets/jamieoliver.jpg','src/assets/paella.jpg', '250 euros', '"La cuisine est le moyen ultime de faire passer un message de paix et damour."', 'Barcelone', '1'),

('Nigella Lawson','1 étoile au guide Michelin', 'lasagnes','src/assets/nigellalawson.jpg','src/assets/lasagnes.jpg', '150 euros', '"Cuisiner, cest un moyen de faire passer un message damour et de joie."', 'Rome', '1');






DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(80) NOT NULL,
  lastname VARCHAR(80) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  city VARCHAR(80) NULL,
  phone VARCHAR(20) DEFAULT NULL UNIQUE,
  hashedPassword VARCHAR(255) NOT NULL,
  isAdmin TINYINT(1) NOT NULL DEFAULT 0,
  avatar VARCHAR(255) DEFAULT NULL,
  date_creation timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  cook_id INT,
  FOREIGN KEY (cook_id) REFERENCES cook (id)
);

INSERT INTO user (firstname, lastname, email, city, phone, hashedPassword, isAdmin, avatar, date_creation, cook_id) VALUES ('Pierre', 'Thomas', 'pierre.thomas@gmail.com', 'Lyon', '0600000000', '$argon2id$v=19$m=65536,t=5,p=1$n0d+QZC50J4zxh96zq0FDw$Qtfc4rjgLIlcJJ9iipQ2lNwPDIPTOx/YX/5JNdxSVZg', 1, 'monavatar1.png', '2022-10-18 12:12:23', '1'),
('Jean', 'Louis', 'jean.louis@gmail.com', 'Lyon', '0600000002', '$argon2id$v=19$m=65536,t=5,p=1$7Wzc0I71pElH/4LNFQw4LA$DIDRuQ+XinmX+Nh02tRN9UTBiB+ABmbTXPTJG+hyi84', 1, 'monavatar1.png', '2022-10-18 12:12:23', '1'),

('boss', 'boss', 'boss@gmail.com', 'Lyon', '0600000001', 'boss', '1', 'monavatar1.png', '2022-10-18 12:12:23', '1');


/*

DROP TABLE IF EXISTS reservation; 

CREATE TABLE reservation (
 
  user_id INT NOT NULL,
  cook_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (id),
  FOREIGN KEY (cook_id) REFERENCES cook (id)
);

INSERT INTO reservation (user_id, cook_id) VALUES ('1', '1'),
('1', '2'),
('1', '3'),
('1', '4'),
('1', '5'),
('2', '1'),
('2', '2'),
('2', '3'),
('2', '4'),
('2', '5');
  
  */
