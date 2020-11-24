const express = require("express");
const cors = require("cors")
const fetch = require('node-fetch');
const app = express();

app.use(cors());

let tweets;

app.get('/', (req, res) => {
	//this is where I want to receive the user that the front end wants
	//to search for, and return json data regarding the tweets
	// res.send({"this": "is working"})
	console.log(req.headers.search_value)
	url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.headers.search_value+'&result_type=popular'
	fetch(url, {
		headers: {
			'Content-Type' : 'application/json',
			'Accept' : 'application/json',
			'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAALDmJwEAAAAAix80Mtkn6ulfEVbiljn5FGk17v4%3DeHJl3DMsy09qTW2IjCFDwz5Zu5Uja5vVSDEzWJAFluT32Dtiue'
		}
	}).then(response => response.json())
	  .then((data) =>{
	  		res.send(data.statuses)
	  })	
})

app.listen(3000, ()=> {
	console.log('app is running on port 3000')
})