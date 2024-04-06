import express from "express";
import http from "http";
import { Server } from "socket.io";


const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`)); 