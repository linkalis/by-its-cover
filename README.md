# By Its Cover

> Webpage context parser powered by IBM Watson's Alchemy Language service


## Requirements

* npm / node (plus node modules listed in package.json)
* jQuery (loaded from CDN in this demo)
* Bootstrap (loaded from CDN in this demo)
* Leaflet (loaded from CDN in this demo)
* Font Awesome


## Setup

To run a local copy of this app, you will first need to generate an API key via IBM's Bluemix service:

1. Head to the [Alchemy Language website](https://www.ibm.com/watson/developercloud/alchemy-language.html) and choose "Start free in Bluemix"

2. Create a Bluemix account, then create new credentials for the AlchemyAPI (within the Watson service offerings)

3. Clone or download this app's repository.  In the top-level directory of the app, create a file called settings.json.  In it, copy and paste the following, including the API key you just created:

```
{
  "alchemy_language_api": "yourApiKeyGoesHere"
}
```

Next, you need to install some node packages and then launch the app from your terminal/command line:

4. In the terminal, navigate to the app's top-level directory.  

5. Run the command `npm install` and wait for it to install all required node packages.

5. Next, run the command `npm start` to launch the express web server.  This will kick off the server.js back-end processes to manage Watson and OSM Nominatim API calls, and will serve up the client-side assets from the public/ folder of the project.

6. In a browser, navigate to http://localhost:3000 to find your version of the app running locally.

## Demo

Live demo app available at: http://by-its-cover.us-east-1.elasticbeanstalk.com
