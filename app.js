const express=require('express');

const app= express();

const path = require("path");

app.get("/", ( req,res) => {

    res.sendFile("C:/Users/LENOVO/Desktop/Sistemas distribuidos/Ferreteria/index.html");
});

app.listen(3000, ()=>{

    console.log("server listening port", 3000);
});
