//modulos y activar el express
const path = require("path")
const express = require("express")
const app = express()

//uso de la carpeta public
app.use(express.static("public/img"))

//escuchando al puerto 3030
app.listen(3030, () =>{
    console.log("Listening port 3030")
})

//rutas home
app.get("/home", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
})
//rutas heroes
app.get("/babbage", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
})
app.get("/berner-lee", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/berner-lee.html"))
})
app.get("/clarke", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
})
app.get("/hamilton", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})
app.get("/hopper", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/hopper.html"))
})
app.get("/lovelace", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/lovelace.html"))
})
app.get("/turing", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/turing.html"))
})