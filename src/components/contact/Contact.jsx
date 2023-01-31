import React, { useEffect } from "react";
import "./contact.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
import dotenv from "dotenv";

dotenv.config();

//configure emailjs

const userId = process.env.REACT_APP_EMAILJSID;

const initialValues = {
  from_name: "",
  reply_to: "",
  message: "",
};
export default function Contact() {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(true);

    emailjs
      .send("from_portfolio_site", "template_1m29p6p", formData, userId)
      .then((res) => {
        setTimeout(() => {
          setMessage(false);
        }, 2000);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact1.png" alt="" />
      </div>
      <div className="right">
        <h2> Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            onChange={changeHandler}
            placeholder="your name"
          />
          <input
            type="email"
            name="reply_to"
            onChange={changeHandler}
            placeholder="your@email.com"
          />
          <textarea
            name="message"
            type="text"
            onChange={changeHandler}
            placeholder="Say hi to me!"
          ></textarea>
          <button type="submit">Send</button>
          <div className="submissionmessage">
            {message && <span>Thanks, I'll reply soon </span>}
          </div>
        </form>
      </div>
    </div>
  );
}
