var express = require('express');
var router = express.Router();
let secureRandoms = require("../promiseMaker");
let albumService = require("../albumService");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/securerandoms", function(req,res,next)
{
  console.log("in API");
  secureRandoms.randoms(function(result)
  {
    res.end(JSON.stringify(result));
  })
});

router.get("/albumthreewords", function(req, res, next)
{
  console.log(" i album rest")
  albumService.album(function(result)
  {
    console.log("her er res: "+ result);
    res.end(JSON.stringify(result));
  })
});

module.exports = router;
