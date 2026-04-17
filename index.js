const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors([
    {
        origin:'http://3.111.197.201/',
        credentials: true
    }
]))
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Backend Home Page is Running....");
});

app.get('/api/test', (req, res) => {
    res.json({
        message: "API is working fine",
        status: "success",
    })
})

app.listen(5000,'0.0.0.0', () => {
    console.log("Backend is running on port : 5000");
})