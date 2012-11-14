/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/twitter.js
 * collection calls twitter search, waits for response and adds the returned data to the collection
 *
 * @param {Backbone} includes all backbone dependencies (underscore & jquery) when backbone is defined with require.js
 */
define(['backbone'],

function(Backbone){

    return Backbone.Collection.extend({

        url: function(){
            return 'http://search.twitter.com/search.json?q=' + this.query + '&page=' + this.page + '&callback=?'
        },

        parse: function(response){

            //loop through response array and add each item to collection
            for(var i = 0; i < response.results.length; i++){

                //create new model and push to collection
                this.add({ text: response.results[i].text});

            }
            return response.results;
        },
        count: 15,
        page: 1,
        query: 'requireJS'
    });
});