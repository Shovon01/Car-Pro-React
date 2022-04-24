import React from "react";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="contactHeader mt-3">Contact Us</h1>
        <form className="contactForm">
          <div className="mb-3 col-lg-6">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              type="Text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-floating col-lg-6">
            <textarea
              className="form-control"
              //   value="Leave a comment here."
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
