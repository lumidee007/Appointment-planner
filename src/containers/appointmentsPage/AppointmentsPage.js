import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && contact && date && time) {
      addAppointment(title, contact, date, time);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
    }
  };

  const appointmentDetails = {
    title,
    contact,
    contacts,
    date,
    time,
    setContact,
    setDate,
    setTime,
    setTitle,
    handleSubmit,
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...appointmentDetails} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={appointments} />
      </section>
    </div>
  );
};
