import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  console.log(name, phone, email);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Phone:{" "}
        <input
          type="tel"
          name="phone"
          value={phone}
          pattern="[0-9]{3}[0-9]{3}[0-9]{5}"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button className="submit">Submit</button>
    </form>
  );
};
