const { Router } = require("express");
const db = require("../SQL_DB");

const artist = Router();

artist.get("/:artist_id", (req, res) => {
  db.query(
    `SELECT * FROM artists WHERE artist_id = ?`,
    [req.params.artist_id],
    (err, results) => {
      if (err) return res.send("oops, there was an error");

      if (results && results[0]) return res.json(results[0]);

      res.send("artist not found");
    }
  );
});

artist.post("/", (req, res) => {
  const { artist_id, artist_name, cover_img } = req.body;
  const sqlQuery = `INSERT INTO artists VALUES("${artist_id}","${artist_name}","${cover_img}")`;
  db.query(sqlQuery, (err) => {
    if (err) return res.send("oops, there was an error");

    res.send("artist added successfully");
  });
});

artist.put("/:artist_id", (req, res) => {
  db.query(
    `UPDATE artists SET views = views + 1 WHERE artist_id = ?`,
    [req.params.artist_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("artist updated successfully");
    }
  );
});

artist.delete("/:artist_id", (req, res) => {
  db.query(
    "DELETE FROM artists WHERE artist_id = ?",
    [req.params.artist_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("artist deleted successfully");
    }
  );
});

module.exports = artist;
