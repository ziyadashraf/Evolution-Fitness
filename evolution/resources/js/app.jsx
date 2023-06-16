import './bootstrap';
import "../css/app.css"
// import "../css/status.css"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./components/App";
import Loading from "./components/Loading";
import { useState } from 'react';
// import Status from "./components/Status";




if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                {/* <Loading /> */}
                <App />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById("app")
    );
}




// export default index;



