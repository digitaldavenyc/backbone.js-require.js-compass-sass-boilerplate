/**
 * Backbone.js Require.js SASS boilerplate
 *
 * @module views/users/list.js
 */
define([
    'use!backbone',
    'text!/templates/users/list.html',
    'collection/users'
], function(Backbone, UserListTemplate, UserListCollection){
    var UserListView = Backbone.View.extend({
        initialize: function(){
            this.collection = UserListCollection;
            this.collection.bind("add", this.exampleBind);
            this.collection = UserListCollection.add({ name: "Dave" });
            this.collection = UserListCollection.add({ name: "James" });
            this.collection = UserListCollection.add({ name: "Alan" });
        },
        exampleBind: function( model ){
            //console.log(model);
        },
        render: function(){
            var data = {
                users: this.collection.models,
                _: _
            };
            console.log(this.collection.models);
            var compiledTemplate = _.template( UserListTemplate, data );
            //this.el.html ( compiledTemplate );
            $("#page").html( compiledTemplate );
        }
    });
    return new UserListView;
});