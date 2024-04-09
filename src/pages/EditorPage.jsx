import React, { useEffect, useRef, useState } from "react";
import Client from "../components/Client";
import BoxEditor from "../components/BoxEditor";
import Output from "../components/Output";
import {useLocation, useParams} from "react-router-dom";
import {io} from "socket.io-client"
import { useSelector } from 'react-redux';
// import {} from "../features/UsenameSlice";

const EditorPage = () => {
    const socketRef = useRef(null);
    const location = useLocation();
    const { roomId } = useParams();
    // console.log("roomId", roomId);

    // const code = useSelector(state => state.code);
    // console.log(code);

    const username = useSelector(state => state.Username.username);
    // console.log(username);

    useEffect(() => {
        // const socket = io(import.meta.env.VITE_BACKEND_URL);

        (async () => {
            socketRef.current = io(import.meta.env.VITE_BACKEND_URL);
            socketRef.current.emit("JOIN", {
                roomId,
                // username: "custom" 
                username,
            });
            
            // var ex = "ex";
            // ex = useSelector(state => state.username);
            // console.log(ex);
            socketRef.current.on("JOINED", ({socketId, username}) => {
                console.log(socketId);
                console.log(username);
            })
        })();

    }, []);

    // var ex = "ex";
    // ex = useSelector(state => state.username);
    // console.log(ex);


    const [clients, setClients] = useState([
        {socketId:1, username: "Hello"},
        {socketId:2, username: "Hii"},
        {socketId:3, username: "Hii"},
        {socketId:4, username: "Hii"},
        {socketId:5, username: "Hii"},
        {socketId:6, username: "Hii"},
        {socketId:7, username: "Hii"},
    ]);


    return (
        <div className="mainWrapper">
            <div className="leftSide">
                <div className="leftSideInner">
                    <h2>Connected Users</h2>
                    <div className="clientsList">
                        {
                            clients.map((client) => (
                                <Client key={client.socketId} username={client.username} />
                            ))
                        }
                    </div>
                </div>
                <button>Copy RoomId</button>
                <button className="leaveBtn">Leave</button>
            </div>
            <div className="editor">
                <div className="editorInner">
                    <BoxEditor />
                </div>
                <div className="output">
                    <Output />
                </div>
                <button className="submitBtn">Submit</button>
            </div>
        </div>
    )
}

export default EditorPage;