/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module model/dummy.js
 */
define(['use!backbone'], function(Backbone){
    var Twitter = Backbone.Model.extend({
        defaults: {
            text: "empty",
            date: "No Date"
        },
        initialize: function(){
            //console.log("new model", this.text);
        }
    });

    return Twitter;
});