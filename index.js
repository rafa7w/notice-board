const PORT = 3000;
const express = require("express");
const path = require("path");
const apiRoute = require("./routes/api");

const app = express();

app.use("/api", apiRoute);

app.listen(3000, () => {
        console.log(`Server running on port ${PORT}...`);
})

