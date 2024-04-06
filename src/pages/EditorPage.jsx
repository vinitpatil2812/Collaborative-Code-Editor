import React, { useState } from "react";
import Client from "../components/Client";
import BoxEditor from "../components/BoxEditor";
import Output from "../components/Output";

const EditorPage = () => {
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