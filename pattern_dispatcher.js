var log = function(value) {
	document.write("<p>" + value + "</p>");
};

var dispatcher = _.clone(Backbone.Events);

dispatcher.on("run", function(args) {
	alert(args);
});

dispatcher.on("exit", function(args) {
	alert(args);
});

dispatcher.on("notification", function(args) {
	alert(args);
});

dispatcher.on("logout", function(args) {
	alert(args);
});

dispatcher.on("welcome", function(args) {
	alert(args);
});

dispatcher.trigger("welcome", function(args) {
	alert(args);
});
