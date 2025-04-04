import React from "react";

export default function PrincipalMenu() {
  return (
    <>
      <div className="menuTitle">
        <h3>Mantenimiento de Sistema</h3>
      </div>
      <hr />
      <div className="container-menu-buttons">
        <div className="button">Artículos</div>
        <div className="button">Proveedores</div>
        <div className="button">Bodegas</div>
        <div className="button">Clientes</div>
        <div className="button">Usuarios</div>
        <div className="button">Roles y Perfiles</div>
        <div className="button">Mantenedor A</div>
        <div className="button">Mantenedor B</div>
      </div>
      <hr />
    </>
  );
}
