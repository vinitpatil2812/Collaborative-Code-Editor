import React, { useEffect, useRef, useState } from "react";
import Client from "../components/Client";
import BoxEditor from "../components/BoxEditor";
import Output from "../components/Output";
import {useLocation, useParams} from "react-router-dom";
import {io} from "socket.io-client"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import toast from "react-hot-toast"

const EditorPage = () => {
    const [clients, setClients] = useState([]);
    const socketRef = useRef(null);
    const location = useLocation();
    const dispatch = useDispatch();
    const { roomId } = useParams();
    // console.log("roomId", roomId);

    // const code = useSelector(state => state.code);
    // console.log(code);

    const username = useSelector(state => state.Username.username);
    // console.log(username);
    // const id = uid();
    // setClients((clients) => [...clients, {socketId : "current", username}]);


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
                toast.success(`${username} joined the room.`);

                // dispatch(addClient({socketId, username}));
                // const clientList = useSelector(state => state.Clients.clients);
                setClients((clients) => [...clients, {socketId, username}]);
            })  

            socketRef.current.on("DISCONNECTED", ({socketId}) => {
                console.log("bug");
                setClients((clients) => {
                    return clients.filter(
                        (client) => {
                            if(client.socketId !== socketId) {
                                toast.success(`${client.username} left the room.`);
                                return true;
                            }
                        }
                    )
                })
            })
        })();

        return () => {
            socketRef.current.off("JOINED");
            socketRef.current.off("DISCONNECTED");
            socketRef.current.disconnect({roomId, username});
        }

    }, []);

    // var ex = "ex";
    // ex = useSelector(state => state.username);
    // console.log(ex);


    // const [clients, setClients] = useState([]);


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