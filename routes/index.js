var express = require('express');
var indexController = require('../controllers/index');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    indexController.index(req,res);
});
router.post('/', function(req, res){
    indexController.index(req,res);
});

module.exports = router;
