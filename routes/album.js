const { Router } = require("express");
const db = require("../SQL_DB");

const album = Router();

album.get("/:album_id", (req, res) => {
  db.query(
    `SELECT * FROM albums WHERE album_id = ?`,
    [req.params.album_id],
    (err, results) => {
      if (err) return res.send("oops, there was an error");

      if (results && results[0]) return res.json(results[0]);

      res.send("album not found");
    }
  );
});

album.post("/", (req, res) => {
  const { album_id, album_name, artist_name, cover_img } = req.body;
  const sqlQuery = `INSERT INTO albums VALUES("${album_id}","${album_name}","${artist_name}","${cover_img}")`;
  db.query(sqlQuery, (err) => {
    if (err) return res.send("oops, there was an error");

    res.send("album added successfully");
  });
});

album.put("/:album_id", (req, res) => {
  db.query(
    `UPDATE albums SET views = views + 1 WHERE album_id = ?`,
    [req.params.album_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("album updated successfully");
    }
  );
});

album.delete("/:album_id", (req, res) => {
  db.query(
    "DELETE FROM albums WHERE album_id = ?",
    [req.params.album_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("album deleted successfully");
    }
  );
});

module.exports = album;
