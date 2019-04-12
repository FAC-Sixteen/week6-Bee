Creating a web app that allows you to browse and review local :b:arbershops for how fresh they are.

# week 6 Team :b::bee:

:b:arbershop :b:anter

## Rate My Barber

This repo contains our team project for Week 4 of Founders and Coders - Rate My Barber!

## Elevator Pitch

Don't keep your lit lid under wraps - share the love with Rate My Barber!

## Figma Mockup
We knew we wouldn't have time to do any frontend styling, but here's a look at what the project might have looked like if we did.

https://www.figma.com/file/MEeyaOiTKrDVRqjaccFsivQk/Untitled?node-id=0%3A1

## Installation Instructions

1. git clone https://github.com/FAC-Sixteen/week6-Bee.git
2. cd into the directory on your computer
3. run npm i to install node dependencies

### Database Testing Instructions
2. Type ```psql``` or ```pgcli``` into your command line to launch postgres
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

You also need to add a TEST_DB_URL to the env for testing, its recommended to use a different database for this.

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

## Process
### Step 1: Brainstorm
![](https://i.imgur.com/le6cBXj.jpg)
### Step 2: Shortlist ideas
![](https://i.imgur.com/OIq6Qe3.jpg)
### Step 3: Draw schema for chosen idea
![](https://i.imgur.com/ZMnLwtg.jpg)
### Step 4: Visualise website layout
![](https://i.imgur.com/KbZJzUw.jpg)


---

## What we learned

### 1. Better knowledge on connecting front-end to back-end
### 2. How to create databases and run build scripts in SQL
### 3. How ACID principles apply to databases
![](https://i.imgur.com/7o32i8d.png)
### 4. The complete journey of a database request/response
![](https://i.imgur.com/k08QdPD.jpg)
### 5. When to use GET vs POST requests for database queries


---

## Challenges

### 1. Connecting the database to the back-end.
### 2. Matching the type of data submitted to the database (strings vs integers)
### 3. Using forms to POST data.
- We couldn't find the request.body property of the request object from our HTML form submissions containing!

---









