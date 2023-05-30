import { request, response } from "express";

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const db = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: 
})

app.listen(8081, () => {
  console.log("Listening....");
})

/*
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud"
});

app.get("/student", (request,response) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if(err) return response.json("Error");
    return response.json(data);
  })
})

app.listen(8081, () => {
  console.log("Listening....");
})
*/