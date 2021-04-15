const { Router } = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "wannabe_spotify",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected..");
});

const song = Router();

song.get("/:song_id", (req, res) => {
  db.query(
    `SELECT * FROM songs WHERE song_id = ?`,
    [req.params.song_id],
    (err, results) => {
      if (err) return res.send("oops, there was an error");

      if (results && results[0]) return res.json(results[0]);

      res.send("song not found");
    }
  );
});

song.post("/", (req, res) => {
  const {
    song_id,
    song_name,
    artist_name,
    album_name,
    length,
    lyrics,
  } = req.body;
  const youtube_link = `https://www.youtube.com/embed/${song_id}`;
  const sqlQuery = `INSERT INTO songs VALUES("${song_id}","${song_name}","${artist_name}","${album_name}","${youtube_link}","${length}",0,"${lyrics}")`;
  db.query(sqlQuery, (err) => {
    if (err) return res.send("oops, there was an error");

    res.send("song added successfully");
  });
});

song.put("/:song_id", (req, res) => {
  db.query(
    `UPDATE songs SET views = views + 1 WHERE song_id = ?`,
    [req.params.song_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("song updated successfully");
    }
  );
});

song.delete("/:song_id", (req, res) => {
  db.query(
    "DELETE FROM songs WHERE song_id = ?",
    [req.params.song_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("song deleted successfully");
    }
  );
});

module.exports = song;
