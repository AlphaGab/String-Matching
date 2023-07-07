const express = require("express");
const app = express();
const port = 3000;
const cors = require('cors');
const showAll = require("./controller/matcher")
const searchHandler = require("./controller/searchhandler");
app.use(cors());
app.use(express.json());
app.use(express.static('view'));
app.get("/",(req,res)=>{
    res.sendFile(__dirname +'/view/a.html');
})
app.post("/match",(req,res)=>{
    const allCombinations = showAll(req,res);
    res.send(allCombinations)
})
app.post("/match/search",(req,res)=>{
    const allCombinations = showAll(req,res);
    const searchQuery = req.body.query
    const searchResult = searchHandler(allCombinations,searchQuery)
    res.send(searchResult)
})

app.listen(port, ()=>{
    console.log("Listening at port "+ port)
})
