/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module model/twitter.js
 * twitter data model
 *
 */
define(['backbone'], function(Backbone){

    return Backbone.Model.extend({
        defaults: {
            text: "empty",
            date: "No Date"
        },
        initialize: function(){
            //console.log("new model", this.text);
        }
    });

});