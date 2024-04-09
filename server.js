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

// const getAllConnectedClients = (roomId) => {
//     return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
//         return {
//             socketId,
//             username: userSocketMap[socketId],
//         };
//     });
// }


app.use(cors());

io.on("connection", (socket) => {
    console.log('socket connected', socket.id);

    socket.on("JOIN", ({roomId, username}) => {
        // userSocketMap[socket.id] = username;
        socket.join(`${roomId}`);
        console.log("room id", roomId);
        // const clients = getAllConnectedClients(roomId);
        console.log(username);

        socket.to(`${roomId}`).emit("JOINED", {socketId : socket.id, username});
    });
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`)); 