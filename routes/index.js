const { Router } = require("express");
const album = require("./album");
const artist = require("./artist");
const playlist = require("./playlist");
const song = require("./song");
const top = require("./top");

const api = Router();

api.use("/album", album);
api.use("/artist", artist);
api.use("/playlist", playlist);
api.use("/song", song);
api.use("/top", top);

module.exports = api;
