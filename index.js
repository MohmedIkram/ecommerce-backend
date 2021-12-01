const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/products")
const cartRoute = require("./routes/cart")
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const url = `mongodb+srv://ikram:<password>@cluster0.rlfdm.mongodb.net/Pinterest` || "mongodb://localhost/Pinterest";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;
con.on("open", () => console.log("MongoDB is connected"));
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
    response.send("Welcome to Pinterest app!!!!");
});

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${PORT}`)
})