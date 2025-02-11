const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sum", (req, res) => {
    const { num1, num2 } = req.body;
    const sum = Number(num1) + Number(num2);
    res.json({ sum });
});

const PORT = 5000;
app.listen(PORT, () => console.log('Сервер запущен'));