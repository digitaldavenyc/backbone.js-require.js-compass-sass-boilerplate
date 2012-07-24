/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module collection/users.js
 */

define(['use!backbone', 'model/users'], function(Backbone, UsersModel){
    var UsersCollection = Backbone.Collection.extend({

        model: UsersModel,

        initialize: function(){

        }
    });

    return new UsersCollection;
});