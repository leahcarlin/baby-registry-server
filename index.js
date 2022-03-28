const express = require("express");
const { all } = require("express/lib/application");
const app = express();
const PORT = 4000;

// model imports
const Item = require("./models").item;
const Sender = require("./models").sender;

app.use(express.json());

app.get("/items", async (req, res, next) => {
  try {
    const allItems = await Item.findAll();
    console.log(allItems);
    res.json(allItems);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
