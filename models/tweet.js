var Twitter = require('twitter');
var db = require('./elastic');
var fs = require('fs');

var client = new Twitter(JSON.parse(fs.readFileSync('./config.json', 'utf8')));


module.exports = {
    listen : function(hashtag){
        var params = {track: hashtag,language:"en"};
        client.stream('statuses/filter', params, function(stream){
            stream.on('data', function(tweet,err) {
                if(err){
                    console.log(err);
                }
                var tweetDb = {
                    "text":tweet.text,
                    "hashtags":[tweet.entities.hashtags],
                    "created_at":new Date(  ),
                    "userName":tweet.user.screen_name,
                    "userImg":tweet.user.profile_image_url
                }
                console.log(tweetDb);
                db.create(params.track,tweetDb);
            });
        });
    }
}