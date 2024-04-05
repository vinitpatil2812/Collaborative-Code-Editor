import React, { useState } from "react";
import { v4 as uid } from "uuid";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState();
    const [userName, setUserName] = useState();

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uid();
        setRoomId(id);
        toast.success("RoomId created");
    }

    const joinRoom = () => {
        if(!roomId || !userName) {
            toast.error("RoomId & Username Not Found");
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: {
                userName,
            },
        });
    }


    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h2 className="mainTitle">Collaborative CodeEditor</h2>
                <h4 className="mainLabel"> Paste Room ID </h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="Enter Room ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId} />
                    <input type="text" className="inputBox" placeholder="Enter Username"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName} />
                    <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                    <span className="createInfo">
                        Click here to create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">
                            New Room
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home; 