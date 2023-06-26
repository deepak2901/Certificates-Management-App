const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your specific origin or origins
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });

// Routes
app.use("/api", authRoutes);

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})