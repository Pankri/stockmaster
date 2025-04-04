import React from "react";
import { Outlet } from "react-router";

export const LoggedPage = () => {
  return (
    <>
      <div className="container-logged">
        <header className="header-logged">
          <p>StockMaster</p>
          <p>Usuario</p>
        </header>
        <main className="outlet-logged">
          <Outlet />
        </main>
      </div>
    </>
  );
};
