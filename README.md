Creating a web app that allows you to browse and review local :b:arbershops for how fresh they are.

# week 6 Team :b::bee:

:b:arbershop :b:anter

## Rate My Barber

This repo contains our team project for Week 4 of Founders and Coders - Rate My Barber!

## Elevator Pitch

Don't keep your lit lid under wraps - share the love with Rate My Barber!

## Installation Instructions

1. git clone https://github.com/FAC-Sixteen/week6-Bee.git
2. cd into the directory on your computer
3. run npm i to install node dependencies

### Database Testing Instructions
2. Type psql or pgcli into your command line to launch postgres
3. Create a test database (choose name you like)
4. Create your user (any name you like) and give them a simple password:
```CREATE USER marvel WITH PASSWORD 'abcd'```
6. Grant them all privileges:
```sh
GRANT ALL PRIVILEGES ON DATABASE superheroes TO marvel;
```
7. Grant the user all privileges:
```GRANT ALL PRIVILEGES ON DATABASE superheroes TO marvel;```

8. Exit postgres with ```\q```
9. Head back to your .env file in your code editor and add the line:
```DB_URL=postgres://marvel:abcd@localhost:5432/superheroes```

10. Go back to the terminal and run your database build file (db_build.js):
```node database/db_build.js```

11. Connect to the database server:
```psql postgres://marvel:abcd@localhost:5432/superheroes```

12. Happy testing!

## The Team:

James 'Big Boi' Levine - [@jameslevine ](https://github.com/jameslevine)

Burhan ':b:' Baalwaan - [@baalwaan](https://github.com/Baalwaan)

Bobby ':bee:' Sebolao - [@bobbysebolao](https://github.com/bobbysebolao)

Rohan '' Shah Summers - [@RohanSSS](https://github.com/RohanSSS)

---

## The Task

---

## Planning

---

## What we learned

1. Better knowledge on connecting front-end to back-end
2. How to create databases and run build scripts in SQL

---

## Struggles

1. Connecting the database to the back-end.
2. Using forms to POST data.

---









