'use strict';

const express = require('express');

//Constants
const PORT = 8080;

//App
const app = express();
app.get('/', function (req, res) {
    var obj = { "product": {
  		"SUPC": 12345,
		"Description": "THe best product",
		"Price": 145.12
		}
	};

    res.send(obj);
  
//  res.send('Hello Universe!!!Now with git learnt again. And with docker-compose working.\nListening on port: '+PORT);

});

app.listen(PORT);

console.log ('Running on http://localhost:'+PORT);
