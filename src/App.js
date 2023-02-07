import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./HeaderComponent/Header";
import Countries from "./BodyComponent/Countries";
import Showcountry from "./BodyComponent/Showcountry";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { Error } from "./Error";

const AppLayout = () => {
    return(
        <React.Fragment>
            <Outlet/>
        </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : '/',
                element : 
                <React.Fragment>
                    <Header/>
                    <Countries/>
                </React.Fragment>
            },
            {
                path : '/country/:name',
                element : <Showcountry/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>)

root.render(<RouterProvider router = {appRouter}/>)