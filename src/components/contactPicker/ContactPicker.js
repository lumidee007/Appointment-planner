import React from "react";

export const ContactPicker = ({ contacts, setContact, contact }, props) => {
  const handleChange = (e) => setContact(e.target.value);

  let conts = (
    <select value={contact} onChange={handleChange}>
      <option value="">No Contact Selected</option>
      {contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );

  return <>{conts}</>;
};
