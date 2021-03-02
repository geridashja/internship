
CREATE TABLE person(
turk_id  BIGINT PRIMARY KEY,
firstname VARCHAR(100),
lastname VARCHAR(100),
fathername VARCHAR(100),
mothername VARCHAR(100),
ismarried VARCHAR(100),
birthyear INT,
birthmonth INT,
birth_day INT,
birthday DATE,
birthcountry VARCHAR(100)
);


CREATE TABLE otel(
hotel_id INT PRIMARY KEY,
hotel_name VARCHAR(100),
city VARCHAR(100),
country VARCHAR(100)
);


CREATE TABLE accommodation(
acom_id BIGINT,
person_id BIGINT,
otel_id BIGINT,
room_number INT,
turkish_plate VARCHAR(100),
accommodation_date DATE,
FOREIGN KEY (person_id) REFERENCES person(turk_id),
FOREIGN KEY (otel_id) REFERENCES otel(hotel_id)
);

CREATE TABLE data(
lastname VARCHAR(100),
fathername VARCHAR(100),
mothername VARCHAR(100)
);



UPDATE accommodation o
SET person_id = d.turk_id
FROM person d
WHERE d.otel_id = o.hotel_id;

UPDATE person p
SET accommodation_id = d.acom_id
FROM accommodation d
WHERE d.person_id = p.turk_id;

--JOIN TABLES 
SELECT * FROM person 
JOIN accommodation ON person.turk_id = accommodation.person_id;






