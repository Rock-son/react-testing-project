const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const serveStatic = require("serve-static");

const app = express();

app.listen();

const server = http.createServer(app);

app.use(serveStatic(path.join(__dirname, "dist")));
app.use(bodyParser.json({
	type: "application/json"
}));
app.use(bodyParser.json({
	type: ["json", "application/csp-report"]
}));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(favicon(path.join(__dirname, 'client/assets', 'favicon.ico')));


// ROUTER
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist", "index.html")));

server.listen(process.env.PORT || 3000);

server.on('listening', function () {
	console.log(`Listening on port ${server.address().port}`);
});
