import { Outlet, NavLink } from "react-router-dom";
import "./Root.css";

export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};

function Root() {
  return (
    <>
      <header>
        <h1 className="root-header">
          <span className="root-header-text">Appointment Planner</span>{" "}
          <span className="root-header-pix">📅📝</span>
        </h1>
        <nav>
          <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
          <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;
