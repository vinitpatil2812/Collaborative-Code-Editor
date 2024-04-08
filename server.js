import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const PORT = 5000;

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

// const userSocketMap = {};

app.use(cors());

io.on("connection", (socket) => {
    console.log('socket connected', socket.id);

    socket.on("JOIN", ({roomId, username}) => {
        // userSocketMap[socket.id] = username;
        // socket.join(roomId);

        // socket.broadcast.emit("JOINED", socket.id);
    });
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`)); 