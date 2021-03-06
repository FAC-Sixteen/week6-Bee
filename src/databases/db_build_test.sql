BEGIN;

DROP TABLE IF EXISTS businesses, reviews CASCADE;

CREATE TABLE businesses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  building_number_name VARCHAR(100) NOT NULL,
  street_name VARCHAR(100) NOT NULL,
  postcode VARCHAR(10) NOT NULL,
  website TEXT
);

INSERT INTO businesses (name, building_number_name, street_name, postcode, website)
VALUES ('Frank''s Fresh Cuts', '123', 'Fake Street', 'AB12 3CD', 'https://www.google.com'), ('Number One All Over', '10', 'Downing Street', 'WC1H 8BW', '');

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  person_name VARCHAR(100) NOT NULL,
  business_id INTEGER NOT NULL,
  rating INTEGER,
  CONSTRAINT rating CHECK (rating BETWEEN 0 AND 5),
  freshness INTEGER,
  CONSTRAINT freshness CHECK (freshness BETWEEN 0 AND 5),
  tv_quality INTEGER,
  CONSTRAINT tv_quality CHECK (tv_quality BETWEEN 0 AND 5),
  banter INTEGER,
  CONSTRAINT banter CHECK (banter BETWEEN 0 AND 5),
  mirror_coverage INTEGER,
  CONSTRAINT mirror_coverage CHECK (mirror_coverage BETWEEN 0 AND 5),
  comment VARCHAR(400)
);

INSERT INTO reviews (person_name, business_id, rating, freshness, tv_quality, banter, mirror_coverage, comment)
VALUES ('James', 1, 4, 5, 4, 3, 0, 'Very happy with my haircut'),
('Burhan', 2, 5, 4, 3, 4, 1, 'Not great barber'),
('Burhanda', 1, 3, 3, 3, 3, 3, 'Distinctly average');


COMMIT;
