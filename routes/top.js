const { Router } = require("express");
const db = require("../SQL_DB");

const top = Router();

top.get("/songs", (req, res) => {
  db.query(
    `SELECT * FROM songs ORDER BY views DESC LIMIT 5`,
    (err, results) => {
      if (err) return res.send("oops, there was an error");

      if (results) return res.json(results);

      res.send("songs not found");
    }
  );
});

top.get("/albums", (req, res) => {
  db.query(`SELECT * FROM albums LIMIT 5`, (err, results) => {
    if (err) return res.send("oops, there was an error");

    if (results) return res.json(results);

    res.send("albums not found");
  });
});

top.get("/playlists", (req, res) => {
  db.query(`SELECT * FROM playlists LIMIT 5`, (err, results) => {
    if (err) return res.send("oops, there was an error");

    if (results) return res.json(results);

    res.send("playlists not found");
  });
});

top.get("/artists", (req, res) => {
  db.query(`SELECT * FROM artists LIMIT 5`, (err, results) => {
    if (err) return res.send("oops, there was an error");

    if (results) return res.json(results);

    res.send("artists not found");
  });
});

module.exports = top;
