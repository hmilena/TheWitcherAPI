const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, "data.json");

app.use(cors());
app.use(express.json());

const readData = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { characters: [], weapons: [], books: [], media: [] };
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing data:", error);
  }
};

const resources = ["characters", "weapons", "books", "media"];

resources.forEach((resource) => {
  app.get(`/api/${resource}`, (req, res) => {
    const data = readData();
    res.json(data[resource] || []);
  });

  app.post(`/api/${resource}`, (req, res) => {
    const data = readData();
    const items = data[resource] || [];

    const newId =
      items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;

    const newItem = {
      id: newId,
      ...req.body,
    };

    items.push(newItem);
    data[resource] = items;

    writeData(data);
    res.status(201).json(newItem);
  });
});

app.get("/", (req, res) => {
  res.send(
    "The Witcher API is running! Access /api/characters, /api/weapons, /api/books, /api/media",
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
