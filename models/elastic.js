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
    getSearch : function(search){
        client.get({
            "index": 'tweet',
            "type": 'starwars',
            "sort" : [
                { "created_at" : {"order" : "desc"}}
            ],
            "query":{
                "bool": {
                    "should": [
                        {"match": {"text": search}},
                        {"match": {"entities.hashtags.text": "starwars"}}
                    ],
                    "minimum_should_match": "50%"
                }
            }
        }, function (error, response) {
            if(error){
                console.log(error);
            }
        });
    },
    lastestTweets : function(nb, callback){
        client.get({
            "index": 'tweet',
            "type": 'starwars',
            "size": 5,
            "sort" : [
                { "created_at" : {"order" : "desc"}}
            ]
        }, callback(  null, data  ));
    }
};