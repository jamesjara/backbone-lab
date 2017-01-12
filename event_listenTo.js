// Now we are creating a literal object , adding suppor for events class
var houseBond = _.extend({
	name : 'jamesbond'
}, Backbone.Events);
var houseMaria = _.extend({
	name : 'mariajara'
}, Backbone.Events);

// reusable callback
var callSomeone = function() {
	document.write("calling to:" + this.name);
};

// The object 'myVal1' listens once for the 'listenMe' event triggered on object
// 'myVal'
houseMaria.listenTo(houseBond, 'callingTo', callSomeone);

// The 'myVal' has no listenMe event and displays the value of 'myVal1'
houseBond.trigger('callingTo');
