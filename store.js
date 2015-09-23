var mongo = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/urlsDB', function(err,db){
	
	if(!err) {
		console.log('We are connected');
	}

	var collection = db.collection('url_hashes');

	// TODO rest code here

});