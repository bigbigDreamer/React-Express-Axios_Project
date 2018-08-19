var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    console.log(22222)
    res.writeln(1222)
})
    .get('/test',(req,res)=>{
        let name = req.body.name;
        res.json({name:8888})
        console.log(name)
    })

module.exports = router;
