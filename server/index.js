const express = require("express");
const bodyParser = require("body-parser");
const mc = require(__dirname + "/controllers/messages_controller");

const app = express();
const port = 3000;

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
