import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./HeaderComponent/Header";
import Countries from "./BodyComponent/Countries";

const AppLayout = () => {
    return(
        <React.Fragment>
            <Header/>
            <Countries/>
        </React.Fragment>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)