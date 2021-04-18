const express = require("express");
const app = express();
const { nanoid } = require("nanoid");

app.use(express.json());

let streams = [];

app.get("/", (req, res) => {
  res.json(streams);
  console.log("GET", streams);
});

app.post("/", (req, res) => {
  const newStream = Object.assign({ id: nanoid() }, req.body);
  streams.push(newStream);
  res.json(newStream);
  console.log("POST", streams);
});

app.get("/edit/:id", (req, res) => {
  const getStream = streams.find((stream) => stream.id === req.params.id);
  res.json(getStream);
  console.log("GET ONE", getStream);
});

app.patch("/edit/:id", (req, res) => {
  streams = streams.map((stream) => {
    if (stream.id === req.params.id) {
      stream.title = req.body.title;
      stream.description = req.body.description;
    }
    return stream;
  });
  console.log("EDIT ONE", streams);
});

app.delete("/delete/:id", (req, res) => {
  streams = streams.filter((stream) => stream.id !== req.params.id);
  res.json("DELETED ONE", streams);
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
