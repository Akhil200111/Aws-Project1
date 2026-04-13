const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Backend Home Page is Running....");
});

app.listen(5000, () => {
    console.log("Backend is running on http://localhost:5000");
})