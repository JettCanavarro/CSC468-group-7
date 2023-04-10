CREATE TABLE Shop (
  shop_id INT PRIMARY KEY AUTO_INCREMENT,
  city_id INT,
  shop_name VARCHAR(100),
  shop_address VARCHAR(200),
  FOREIGN KEY (city_id) REFERENCES City(city_id)
);
