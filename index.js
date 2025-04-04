import http from "http";
import express from 'express';
const app = express();
const server = http.createServer(app);
app.get("/",(req,res) => {
    res.send("This is home page");
})

server.listen(8080,() => {
    console.log("check");
})