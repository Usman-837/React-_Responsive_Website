import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    alert(
      `My name is ${data.name}. My phone number is ${data.phone}. My email is ${data.email}. Here is my message: ${data.msg}`
    );
  };

  return (
    <>
      <div className="py-3">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container my-2">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={inputEvent}
                  placeholder="Enter full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                  Phone #
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput3" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  placeholder="Enter Message Here"
                ></textarea>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <button className="btn btn-outline-primary w-100" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
