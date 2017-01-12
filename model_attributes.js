var log = function(value) {
	document.write("<p>" + value + "</p>");
};

var Animal = Backbone.Model.extend({
	// rest config
	urlRoot : '/animal',
	// model defaults
	defaults : {
		type : "unkwn",
		extinct : false,
		age : 0
	},
	initialize : function() {
		log("creating new animal");

		// listening for changes to the model
		this.initListeners();
	},
	initListeners : function() {
		// change: KEY-ATTRIBUTE
		this.on("change:extinct", function(model) {
			var type = model.get("type");
			// well call be unset to not extincted, FYI, to check if true
			log(type + " animal, has been extincted, duhh!");
		});
	},
	// manipulatin model attributes,
	extinct : function(isExtinct) {
		this.set({
			extinct : isExtinct
		});
	}
});

// setting atributes
var dog = new Animal({
	type : "dog",
	age : 10
});
var cat = new Animal({
	type : "cat",
	age : 102
});

// getting attributes
log(dog.get("type"));
log(cat.get("type"));

// lets manipulate the object
dog.extinct(true);

// getting attributes
log(dog.get("extinct"));

// new animal changes
var changes = {
	type : "cat",
	extinct : false,
	age : 77
}

// lets get crazy! dog is a cat!:D
dog.save(changes, {
	success : function(animal) {
		alert(JSON.stringify(animal));
	}
});