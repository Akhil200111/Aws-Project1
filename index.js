const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Backend Home Page is Running....");
});

app.listen(5000,'0.0.0.0', () => {
    console.log("Backend is running on port : 5000");
})