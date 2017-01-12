var log = function(value) {
	document.write("<p>" + value + "</p>");
};

var AnimalModel = Backbone.Model.extend({
	urlRoot : '/animal',
	defaults : {
		name : '',
		type : ''
	}
});

var foofiy = new AnimalModel();

var foofiyData = {
	name : 'foo',
	type : 'dog'
};

// if we doent set ID, will be a /POST and data will be send as payload, server
// must returnn the new id
foofiy.save(foofiyData, {
	success : function(response) {
		alert(JSON.stringify(response));
	}
});

// Gettting some dogs
var savedDog = new AnimalModel({
	id : 100
});

// will query /animal/<id>
savedDog.fetch({
	success : function(response) {
		alert(JSON.stringify(response));
	}
});

// deleting a model /PUT
savedDog.destroy({
	success : function() {
		alert('Destroyed');
	}
});