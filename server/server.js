require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DevCoop = require("./models/devCoopData");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/developersCoop", (req, res) => {
  DevCoop.find({}, (err, allDevCoop) => {
    res.json({ devcoop: allDevCoop });
  });
});

app.get("/seeds", (req, res) => {
  DevCoop.create([
    {
      name: "abdul",
      discription: "css for button",
      code: "{color: `red`}",
      links: ["https://www.example.com", "hdskhvh"],
      img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Beautiful-Material-Design-Button-UI-Template-In-Pure-CSS.png?fit=425%2C312&ssl=1",
    },
    {
      name: "affaf",
      discription: "Lern Javascript",
      code: "",
      links: ["sssssssssssss", "hdskhvh"],
      img: "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Beautiful-Material-Design-Button-UI-Template-In-Pure-CSS.png?fit=425%2C312&ssl=1",
    },
    {
      name: "jorge",
      discription: "css for button",
      code: "{color: `green`}",
      links: [],
      img: "https://templateyou.com/wp-content/uploads/2022/01/Bubbly-Button.jpg",
    },
    {
      name: "mouloud",
      discription: "css for button",
      code: "{color: `green`}",
      links: [],
      img: "https://templateyou.com/wp-content/uploads/2022/01/Bubbly-Button.jpg",
    },
    {
      name: "carmen",
      discription: "css for button",
      code: "{color: `green`}",
      links: [],
      img: "https://i.ytimg.com/vi/du0ebhwu6fY/mqdefault.jpg",
    },
  ]);
});

app.listen(5000, (req, res) => {
  console.log("working on 5000 port");
});
