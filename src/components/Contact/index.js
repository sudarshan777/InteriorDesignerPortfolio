import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMail } from "../../redux/actions/mailActions";
import GoogleMap from "./googleMap";

const Contact = () => {
  const dispatch = useDispatch();

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

    dispatch(sendMail(newDetails));
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message sent");
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="container-fluid">
            <h3>Contact</h3>
            <p>We will be glad to hear from you.</p>
            <p>
              If there’s anything you’d like to ask us, we’re here and ready to
              help in every way we can.
            </p>
            <div>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label> Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Subject:</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label> Message:</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col">
          <h3> Reach us out at:</h3>
          <h4> Yasha Design Studio</h4>
          <p>
            123 Shanti Vihar Colony
            <br /> Danganiya <br />
            Raipur 492001 <br />
            Chhattisgarh, India
            <br /> Ph: +91 99999 99999
            <br /> Mail: yashadesignstudio@gmail.com
          </p>

          <h1>Show google map</h1>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default Contact;
