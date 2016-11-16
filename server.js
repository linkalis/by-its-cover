var express = require('express');
var expressBrowserify = require('express-browserify');
var request = require('request');
var watson = require('watson-developer-cloud');

var settings = require('./settings.json');
//var sampleData = require('./sample_alchemy_response.json');

var alchemy_language = watson.alchemy_language({
  api_key: settings.alchemy_language_api
});

var app = express();

// Serve up static assets for the client view
app.use(express.static('public/'));


// Request data from Watson API, then pass back to view
app.get("/call_watson", function(req, res) {
  var parameters = {
    extract: 'entities,concepts',
    showSourceText: 1,
    sentiment: 1,
    quotations: 1,
    maxRetrieve: 100,
    url: req.query.urlInput
  };

  alchemy_language.combined(parameters, function (err, response) {
    if (err)
      console.log('error:', err);
    else
      console.log(JSON.stringify(response, null, 2));
      res.json(response);
  });
});


// Geocode location with OSM Nominatim
app.get("/geocode_location/:loc", function(req, res) {
  var nominatim_url = "http://nominatim.openstreetmap.org/search?format=json&q=" + req.params.loc;

  console.log("Geocoding " + req.params.loc);
  request.get(nominatim_url, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      var possibleLocations = JSON.parse(body);
      var top_result = possibleLocations[0];
      console.log(top_result);
      res.json(top_result);
    } else {
      console.log(err);
      res.json(undefined);
    }
  });

});


app.listen(3000, function(){
  console.log("App listening on port 3000!");
});
