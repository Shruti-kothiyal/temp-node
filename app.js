const express = require('express')
const app = express();

app.use((request, response)=> {
    response.send("Hello   world");
})

app.post("/login", (req, res)=> {
    req.body()
})

app.listen(5000, ()=> {
    console.log("running on localhost:5000")
});