const { Router } = require("express");

const album = Router();

album.get("/:album_id", (req, res) => {});

album.post("/:album_id", (req, res) => {});

album.put("/:album_id", (req, res) => {});

album.delete("/:album_id", (req, res) => {});

module.exports = album;
