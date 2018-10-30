const express = require("express");

const router = express.Router();

const db = require("./../database");

//TODO: Implement user validating middleware!!

// Stream a specific song
router.get("/stream/:id", function (req, res) {
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

router.get("/:id", function (req, res) {
    db.query("CALL get_song(?)", id, function (err, result, fields) {
        if(err) throw err;
        res.send(result);
    });
});

// Get all songs available
// with the chosen limit
// and the chosen offset
router.get("/all/:offset/:limit", function (req, res) {
    db.query("CALL get_songs()", function (err, result, fields) {
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