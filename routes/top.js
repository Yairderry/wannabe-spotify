const { Router } = require("express");

const top = Router();

top.get("/songs", (req, res) => {});

top.get("/albums", (req, res) => {});

top.get("/playlists", (req, res) => {});

top.get("/artists", (req, res) => {});

module.exports = top;
