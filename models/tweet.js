var Twitter = require('twitter');
var db = require('./elastic');
var fs = require('fs');

var client = new Twitter(JSON.parse(fs.readFileSync('./config.json', 'utf8')));


module.exports = {
    listen : function(hashtag){
        var params = {track: hashtag};
        client.stream('statuses/filter', params, function(stream){
            stream.on('data', function(tweet) {
                db.create(params.track,tweet);
            });
        });
    }
}