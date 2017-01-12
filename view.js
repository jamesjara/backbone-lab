// we extend from the view
var AppView = Backbone.View.extend({
	// el - every view needs and target element
	el : '#module',
	// called when this view is instantiated.
	initialize : function() {
		this.render();
		this.renderModule();
	},
	render : function() {
		this.$el.html("too fast, never seen");
	},
	renderModule : function() {
		this.$el.html("renderModule too fast");
	}
});

var appView = new AppView();
