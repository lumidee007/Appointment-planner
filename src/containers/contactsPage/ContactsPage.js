import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicateName, setDuplicateName] = useState(false);

  const { contacts, addContact } = props;

  console.log("contacts:", contacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!duplicateName) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const filteredContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    filteredContacts && setDuplicateName((prevState) => !prevState);
  }, [contacts, name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
