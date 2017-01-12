var AppRouter = Backbone.Router.extend({
	routes : {
		"user/:id" : "getUser",
		":module/:action" : "loadView",
		"*actions" : "defaultRoute"
	}
});

var app_router = new AppRouter();

app_router.on('route:getUser', function(id) {
	// definition of the variable in the route
	alert("user id : " + id);
});

app_router.on('route:loadView', function(modulee, action) {
	alert("loading module-action" + modulee + action);
});

app_router.on('route:defaultRoute', function(actions) {
	alert(actions);
});

// Backbone history bookmarkable
Backbone.history.start();
