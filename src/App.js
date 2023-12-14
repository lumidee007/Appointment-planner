import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Paul Smith", phone: "1234567890", email: "paul.smith@gmail.com" },
  ]);
  const [appointments, setAppointments] = useState([]);
  // console.log("appointments:::", appointments);

  const addContact = (name, phone, email) => {
    const newContact = { name, phone, email };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  const addAppointment = (title, contact, date, time) => {
    const newAppointment = { title, contact, date, time };
    setAppointments((oldAppointment) => [newAppointment, ...oldAppointment]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} addContact={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
