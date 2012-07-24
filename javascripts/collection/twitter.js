/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/dummy.js loads static dummy data into the application. is only used before social networks are integrated into code-base.
 */
define([
    'use!backbone',
    'model/twitter'
],

function(Backbone, Model){

    var Tweets = Backbone.Collection.extend({
        url: function(){
            //return 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=' + this.screenname + '&count=' + this.count;
            return 'http://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page + '&callback=?'
        },
        parse: function(response, xhr){

            for(var i = 0; i < response.results.length; i++){

                //create new model and push to collection
                this.add({ text: response.results[i].text});

            }
            return response.results;
        },
        count: 10,
        screenname: 'digitaldavenyc',
        page: 1,
        query: 'sony'
    });

    return Tweets;
});