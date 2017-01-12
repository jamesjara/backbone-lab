// we extend from the view
var AppView = Backbone.View.extend({
	// el - every view needs and target element
	el : '#module',
	// called when this view is instantiated.
	initialize : function() {
		this.render();
	},
	render : function() {
		// compile template first
		var template = _.template($("#module_template").html(), {});
		this.$el.html(template);
	},
	events : {
		"click label" : "doAlert"
	},
	doAlert : function() {
		alert("click in the label");
	}
});

var appView = new AppView();
