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

app.use(cors());

io.on("connection", (socket) => {
    console.log('socket connected', socket.id);
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`)); 