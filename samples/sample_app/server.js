let express = require("express");
let app = express();
let body_parser = require("body-parser");
let http = require('http').Server(app);
let io = require("socket.io")(http);


app.use(express.static(__dirname));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: false}));

let messages = [
    {name: "Tim", message: "Hello"},
    {name: "kevin", message: "Hi"}
]

app.get("/message", (req, res) => {
    res.send(messages);
})

app.post("/message", (req, res) => {
    console.log(req.body);
    messages.push(req.body);
    res.sendStatus(200);
});

let server = http.listen(3000, () => {
    console.log("Server is listening on port " + server.address().port);
});