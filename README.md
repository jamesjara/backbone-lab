# backbone-lab
Just a simple backbone lab, app, events, model, collection, router, history, sync, view and utilities


Backbone.js is a light weight JavaScript library that allows to develop and structure client side applications that run in a web browser. It offers MVC framework which abstracts data into models, DOM into views and bind these two using events.

#Dependencies
Underscore.js
jQuery.js
json2.js

#Events
Events are capable of binding objects and trigger custom events i.e. you can bind the custom events by using desired name of our choice.

#Models
Models contain dynamic data and its logic. Logic such as conversions, validations, computed properties, and access control fall under Model. As it contains all application data, model is also called as heart of JavaScript application.

#Collection
Collections are ordered sets of Models. We just need to extend the backbone's collection class to create your own collection. Any event that is triggered on a model in a collection will also be triggered on the collection directly. This allows you to listen for changes to specific attributes in any model in a collection.
