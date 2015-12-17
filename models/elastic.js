/**
 * Created by Thomas on 17/12/2015.
 */
var elastic = require('elasticsearch');

var client = new elastic.Client({
    host: 'localhost:9200',
    log: 'error'
});


module.exports = {
    create : function(hashtag,tweet){
        client.create({
            index: 'tweet',
            type: hashtag,
            body: tweet
        }, function (error) {
            if(error){
                console.log(error);
            }
        });
    },
    getSearch : function(search,callback){
        client.search({
            "index": 'tweet',
            "type": 'starwars',
            "body": {
                "sort": [
                    {"created_at": {"order": "asc"}}
                ],
                "query": {
                    "bool": {
                        "should": [
                            {"match": {"text": search}},
                            {"match": {"hashtags": "starwars"}}
                        ],
                        "minimum_should_match": "50%"
                    }
                }
            }
        },callback);
    },
    latestTweets : function(nb, callback){
        client.search({
            "index": 'tweet',
            "type": 'starwars',
            "body":{
                "size": 5,
                "sort" : [
                    { "created_at" : {"order" : "asc"}}
                ]
            }
        },callback);
    }
};