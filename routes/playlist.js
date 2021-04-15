const { Router } = require("express");
const db = require("../SQL_DB");

const playlist = Router();

playlist.get("/:playlist_id", (req, res) => {
  db.query(
    `SELECT * FROM playlists WHERE playlist_id = ?`,
    [req.params.playlist_id],
    (err, results) => {
      if (err) return res.send("oops, there was an error");

      if (results && results[0]) return res.json(results[0]);

      res.send("playlist not found");
    }
  );
});

playlist.post("/", (req, res) => {
  const { playlist_id, playlist_name, created_at, cover_img } = req.body;
  const sqlQuery = `INSERT INTO playlists VALUES("${playlist_id}","${playlist_name}","${created_at}","${cover_img}")`;
  db.query(sqlQuery, (err) => {
    if (err) return res.send("oops, there was an error");

    res.send("playlist added successfully");
  });
});

playlist.put("/:playlist_id", (req, res) => {
  db.query(
    `UPDATE playlists SET views = views + 1 WHERE playlist_id = ?`,
    [req.params.playlist_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("playlist updated successfully");
    }
  );
});

playlist.delete("/:playlist_id", (req, res) => {
  db.query(
    "DELETE FROM playlists WHERE playlist_id = ?",
    [req.params.playlist_id],
    (err) => {
      if (err) return res.send("oops, there was an error");

      res.send("playlist deleted successfully");
    }
  );
});

module.exports = playlist;
