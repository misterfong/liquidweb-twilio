var express = require('express'),
	bodyParser = require('body-parser'),
	stormAPI = require('stormondemand'),
	client   = new stormAPI({ username: process.env.USER, password: process.env.PASSWORD });

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.all('/', function(request, response) {
	var body = request.body.Body;
	if (body === 'bandwidth') {
		var output = "<Response><Sms>";

		client.Monitoring.Bandwidth.stats({ uniq_id: process.env.SERVER_ID}, function (res) {
			output += "=== Monthly Bandwidth Stats ==";
			output += " Total: " + res.averages.month.both.GB + "GB "
			output += " Incoming: " + res.averages.month.in.GB + " GB ";
			output += " Outgoing: " + res.averages.month.out.GB + " GB ";
			output += " Quota: " + res.pricing.quota + " GB ";
			output += "</Sms></Response>";
			response.send(output);
		});
	} else {
		response.send("commands available: bandwidth");
	}
    
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
