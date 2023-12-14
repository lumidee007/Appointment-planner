import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = (props) => {
  const {
    setContact,
    contacts,
    date,
    title,
    setTitle,
    time,
    handleSubmit,
    setDate,
    setTime,
    contact,
  } = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Date:{" "}
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={getTodayString()}
          />
        </label>
        <label>
          Time:{" "}
          <input
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          Select a contact:{" "}
          <ContactPicker
            contacts={contacts}
            setContact={setContact}
            contact={contact}
            title={title}
            value
          />
        </label>
        <button className="submit">Submit</button>
      </form>
    </>
  );
};
