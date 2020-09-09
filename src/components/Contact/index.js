import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newDetails = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    console.log(newDetails);
    alert("Message sent");
  };
  return (
    <div>
      <h3>Contact</h3>
      <p>We will be glad to hear from you.</p>
      <p>
        If there’s anything you’d like to ask us, we’re here and ready to help
        in every way we can.
      </p>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label> Name:</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label> Email:</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label> Subject:</label>
            <input
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div>
            <label> Message:</label>
            <input
              type="text"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h3> Reach us out at:</h3>
        <h4> Yasha Design Studio</h4>
        <p>
          {" "}
          123 Shanti Vihar Colony
          <br /> Danganiya <br />
          Raipur 492001 <br />
          Chhattisgarh, India
          <br /> Ph: +91 99999 99999
          <br /> Mail: yashadesignstudio@gmail.com
        </p>
      </div>
      <div>
        <h1>Show google map</h1>
      </div>
    </div>
  );
};

export default Contact;
