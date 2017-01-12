var log = function(value) {
	document.write("<p>" + value + "</p>");
};

var coreHouses = Backbone.Model.extend({
	constructor : function() {
		log("log: coreHouses constructor");
		Backbone.Model.prototype.constructor.apply(this, arguments);
	}
});

var beachHouse = coreHouses.extend({
	constructor : function() {
		log("log: beachHouse constructor");
		coreHouses.prototype.constructor.apply(this, arguments);
	}
});

new coreHouses();
new beachHouse();