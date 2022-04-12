const express = require("express");
const { all, listen } = require("express/lib/application");
const corsMiddleWare = require("cors");
const app = express();
const PORT = 4000;

// model imports
const Item = require("./models").item;
const Sender = require("./models").sender;

app.use(express.json());
app.use(corsMiddleWare());

app.get("/items", async (req, res, next) => {
  try {
    const allItems = await Item.findAll();
    console.log(allItems);
    res.json(allItems);
  } catch (e) {
    next(e);
  }
});

app.post("/sender/:id", async (req, res, next) => {
  try {
    const { giftMessage, name } = req.body;
    const id = req.params.id;
    if (!name) res.status(400).send({ message: "Name is required" });
    // is itemId already in the table
    const senderExists = await Sender.findOne({
      where: { itemId: id },
    });
    if (senderExists) {
      res.status(404).send({ message: "Item has already been fulfilled" });
    } else {
      const sender = await Sender.create({
        giftMessage,
        name,
        itemId: id,
      });
    }
  } catch (e) {
    next(e);
  }
});

app.patch("/items/:id", async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const item = await Item.findByPk(itemId);
    console.log(item);
    if (!item) res.status(404).send({ message: "Item not found" });

    if (item.fulfilled) {
      res.status(406).send({ message: "Item has already been fulfilled" });
    } else {
      const updateFulfilled = await item.update({ fulfilled: true });
      res.status(201).send(updateFulfilled);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
