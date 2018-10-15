const express = require("express");

//CONFIG
const db = require("./../database");
//END-CONFIG

const router = express.router();

router.get("/:playlistid", function (req, res) {
    let playlistid = req.params.playlistid;

    db.query("", function (err, result, fields) {
        if(err) throw err;

    });
});

router.get("/:playlistid/:songid", function (req, res) {
    let playlistid = req.params.playlistid;
    let songid = req.params.songid;

    db.query("", function (err, result, fields) {
        if(err) throw err;

    });
});