import React from "react";
import { Outlet } from "react-router";

export const LoggedPage = () => {
  return (
    <>
      <div className="container-logged">
        <header className="header-logged">
          <h1>Usuario</h1>
        </header>
        <main className="outlet-logged">
          <Outlet />
        </main>
      </div>
    </>
  );
};
