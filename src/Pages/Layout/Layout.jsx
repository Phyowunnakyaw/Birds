import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";

export function Layout () {

     return (

             <div>

                  <NavBar />

                  <div>

                       <Outlet />

                  </div>

             </div>

     )
}