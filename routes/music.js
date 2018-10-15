const express = require("express");

const router = express.Router();

const db = require("./../database");

//TODO: Implement user validating middleware!!

// Get a specific song
router.get("/:id", function (req, res) {
    // let id = req.params.id;
    // let file = "./music/" + id + ".mp3";
    //
    // fs.exists(file, function (exists) {
    //     if(exists) {
    //         let rstream = fs.createReadStream(file);
    //         rstream.pipe();
    //     }
    //     else {
    //         res.status(404).send("It's a 404");
    //     }
    // });
});

// Get all songs available
router.get("/", function (req, res) {
    db.query("SELECT * FROM songs", function (err, result, fields) {
        if(err) throw err;
        res.send(result);
    });
});

// Upload a new song
router.post("/upload", function (req, res) {
    
});

// Delete a song from the system
router.post("/delete", function (req, res) {

});

module.exports = router;