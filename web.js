var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 fs.readFileSync("index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
