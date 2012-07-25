/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/twitter.js
 * collection calls twitter search, waits for response and adds the returned data to the collection
 *
 * @param {use!backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 */
define([
    'use!backbone'
],

function(Backbone){

    var Tweets = Backbone.Collection.extend({
        url: function(){
            //return 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=' + this.screenname + '&count=' + this.count;
            return 'http://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page + '&callback=?'
        },
        parse: function(response, xhr){

            //loop through response array and add each item to collection
            for(var i = 0; i < response.results.length; i++){

                //create new model and push to collection
                this.add({ text: response.results[i].text});

            }
            return response.results;
        },
        count: 10,
        page: 1,
        query: 'sony'
    });

    return Tweets;
});