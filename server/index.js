const express = require("express")
const { createServer } = require("node:http")
const { Server } = require("socket.io")
const cors = require("cors")

const app = express()
const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("Usuario conectado")

    socket.emit("message", "Holi UwU")

    socket.on("message", (msg) => {
        // io.emit => Envía a todos incluído uno mismo
        // socket.emit => Envía solo al socket/persona conectada
        // socket.broadcast.emit => Envía a todos menos a sí mismo
        socket.emit("confirmation", "Mensaje enviado")
        socket.broadcast.emit("message", "Enviaron esto: "+ msg)
    })
})

app.get("/", (req, res) => {
    res.send("Hello world")
})

server.listen(3000, () => {
    console.log("Estoy corriendo")
})