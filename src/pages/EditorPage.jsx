import React, { useEffect, useRef, useState } from "react";
import Client from "../components/Client";
import BoxEditor from "../components/BoxEditor";
import Output from "../components/Output";
import Events from "../Events";
import {useLocation} from "react-router-dom";
import {io} from "socket.io-client"

const EditorPage = () => {
    const socketRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // (async () => {
        //     socketRef.current = await initSocket();
        //     // socketRef.current.emit(Events.JOIN, {
        //     //     roomId,
        //     //     username: location.state?.username,
        //     // });
        // })();

        const socket = io("http://localhost:5000");
    }, []);


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