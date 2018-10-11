var express = require('express');
var router = express.Router();

// Returns list of songs
router.get('/', function(req, res, next) {
  //TODO: Implement database file
});

router.get("/search/:keyword", function (req, res) {

});

// Returns a specific image
router.get("/image/:id", function (req, res) {
    let id = req.params.id;

    let img = "./image/" + id + ".png";

    let rstream = fs.createReadStream(img);
    rstream.pipe(res);
});

module.exports = router;
