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
    }
}