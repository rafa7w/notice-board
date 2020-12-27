const PORT = 3000;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let posts = [
        {
                id: "sdsaasdf",
                title: "Title test",
                description: "Test description"
        }
];

app.get("/all", (req, res) => {
        res.json(JSON.stringify(posts));
})

app.post("/new", (req, res) => {

})

app.listen(3000, () => {
        console.log(`Server running on port ${PORT}...`);
})

