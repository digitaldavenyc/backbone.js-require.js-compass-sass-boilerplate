/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module views/users/list.js
 */
define([
    'backbone',
    'text!templates/users.html',
    'collection/users'],

    function(Backbone, UserListTemplate, UserListCollection){

    return Backbone.View.extend({
        initialize: function(){
            this.collection = new UserListCollection();
            this.collection.bind("add", this.exampleBind);
            this.collection.add({ name: "Dave" });
            this.collection.add({ name: "James" });
            this.collection.add({ name: "Alan" });
        },
        exampleBind: function( model ){
            //console.log(model);
        },
        render: function(){
            var data = {
                users: this.collection.models,
                _: _
            };
            var compiledTemplate = _.template( UserListTemplate, data );
            $("#page").html( compiledTemplate );
        }
    });

    }
);