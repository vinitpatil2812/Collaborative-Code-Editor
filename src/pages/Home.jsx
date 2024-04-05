import React from "react";

const Home = () => {
    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <h2 className="mainTitle">Collaborative CodeEditor</h2>
                <h4 className="mainLabel"> Paste Room ID </h4>
                <div className="inputGroup">
                    <input type="text" className="inputBox" placeholder="Enter Room ID" />
                    <input type="text" className="inputBox" placeholder="Enter Username" />
                    <button className="btn joinBtn">Join</button>
                    <span className="createInfo">
                        Click here to create &nbsp;
                        <a href="" className="createNewBtn">
                            New Room
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home; 