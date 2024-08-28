require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/about", (req, res) => {
  res.send({ message: "Hello Hii this is raj" });
});
app.get("/contact", (req, res) => {
  res.send({ message: "Hello Hii this is contact" });
});
app.get("/login", (req, res) => {
  res.send({ message: "Hello Hii this is login" });
});
app.get("/", (req, res) => {
  res.json([
    {
      squadName: "Super hero squad",
      homeTown: "Metro City",
      formed: 2016,
      secretBase: "Super tower",
      active: true,
      members: [
        {
          name: "Molecule Man",
          age: 29,
          secretIdentity: "Dan Jukes",
          powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
        },
        {
          name: "Madame Uppercut",
          age: 39,
          secretIdentity: "Jane Wilson",
          powers: [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes",
          ],
        },
        {
          name: "Eternal Flame",
          age: 1000000,
          secretIdentity: "Unknown",
          powers: [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel",
          ],
        },
      ],
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
