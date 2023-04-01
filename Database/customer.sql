CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(255) NOT NULL,
  UserID VARCHAR(255) NOT NULL,
  Email VARCHAR(255),
  Password VARCHAR(255),
  PRIMARY KEY (id)
);
INSERT INTO customer (Name, UserID, Email, Password) VALUES
#This will be where we insert test date in the rows below
('Jane Doe', 'a01', 'email@email.com', 'password'),
(),
(),
();
