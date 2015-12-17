/**
 * Created by Thomas on 17/12/2015.
 */
var db = require('../models/elastic');

module.exports = {
    index: function(req,res){
        db.lastestTweets(5);
        res.render('index', { title: 'Express' });
    }
};
