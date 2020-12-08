const express = require("express");
const cors = require("cors")
const fetch = require('node-fetch');
const app = express();

app.use(cors());
app.get('/search', (req, res) => {
	url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.headers.search_value+'&result_type=popular&tweet_mode=extended '
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

app.get('/search-user', (req, res) => {
	console.log('Works')	
})

app.get('/random', (req, res) => {
	url = 'https://api.twitter.com/1.1/search/tweets.json?q='+req.headers.search_value+'&result_type=popular&tweet_mode=extended&count=1'
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

app.listen(process.env.PORT || 3000, ()=> {
	console.log('app is running on port 3000')
})