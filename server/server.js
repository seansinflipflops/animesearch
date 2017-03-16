const express = require('express');
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
const slug = require("slug");

app.use(express.static(__dirname + '/../app'))
app.use(bodyParser.json())

app.post('/anime', function(req, resp) {
	request.get(`https://kitsu.io/api/edge/anime?filter[text]=` + slug(req.body.anime).toLowerCase(), function(error, res, body) {
		resp.json(body);
	});
});

const port = process.env.PORT || 8000;

app.listen(port, (err) => {
  if(err) {
    console.log('Error occurred: ', err);
  }
  console.log('Server is listening to port : ', port);
})
