
CREATE TABLE person(
turk_id  BIGINT,
firstname VARCHAR(100),
lastname VARCHAR(100),
fathername VARCHAR(100),
mothername VARCHAR(100),
gender VARCHAR(100),
ismarried VARCHAR(100),
birthyear INT,
birthmonth INT,
birthdayy INT,
data DATE,
birthcountry VARCHAR(100),
otel_id BIGINT REFERENCES otel (hotel_id)
);


CREATE TABLE otel(
hotel_id INT PRIMARY KEY,
hotel_name VARCHAR(100),
city VARCHAR(100),
country VARCHAR(100),
accommodation_id BIGINT REFERENCES accommodation(hotel_id)
);


CREATE TABLE accommodation(
hotel_id  INT ,
person_id BIGINT,
room_number INT,
turkish_plate VARCHAR(100)
);

CREATE TABLE data(
lastname VARCHAR(100),
fathername VARCHAR(100),
mothername VARCHAR(100)
);

UPDATE otel o
SET accommodation_id = d.hotel_id
FROM accommodation d
WHERE d.hotel_id = o.hotel_id;


UPDATE accommodation o
SET person_id = d.turk_id
FROM person d
WHERE d.otel_id = o.hotel_id;


SELECT * FROM person INNER JOIN otel ON person.otel_id = otel.hotel_id INNER JOIN accommodation ON otel.accommodation_id = accommodation.hotel_id;

SELECT * FROM person ORDER BY RANDOM();

\copy (SELECT * FROM person INNER JOIN otel ON person.otel_id = otel.hotel_id INNER JOIN accommodation ON otel.accommodation_id = accommodation.hotel_id) TO 'C:\Users\shqip\Desktop\dump.csv' DELIMITER ',' CSV HEADER;