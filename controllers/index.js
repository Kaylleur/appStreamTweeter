/**
 * Created by Thomas on 17/12/2015.
 */
var db = require('../models/elastic');

module.exports = {
    index: function(req,res){
        db.latestTweets(5,function(err,data){
            res.render('index', { title: 'Star wars tweet !',data:data.hits.hits||err });
        });
    },
    search:function(req,res) {
        db.getSearch(req.body.search, function (err, data) {
            console.log(JSON.stringify(data||err));
            res.render('index', {title: 'Star wars tweet !', data: data.hits.hits|| err});
        });
    }
};
