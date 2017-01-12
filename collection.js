var log = function(value) {
	document.write("<p>" + value + "</p>");
};

var Animal = Backbone.Model.extend({
	defaults : {
		type : 'unknown'
	}
});

var dog = new Animal({
	type : 'dog'
});
var cat = new Animal({
	type : 'cat'
});

var petStack = Backbone.Collection.extend({
	model : Animal
});

var petsHospital = new petStack([ dog, cat ]);

// let print this beatiful hospital of pets
log(JSON.stringify(petsHospital));
