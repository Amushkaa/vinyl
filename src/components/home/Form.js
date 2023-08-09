import React from "react";

export default function Form() {
  return (
    <form className="form">
      <div className="container">
        <div className="form-wrapper">
          <div className="text-wrapper">
            <h3>Do you want to know more?</h3>
            <div className="form-text">
              Write us a message and we will get in contact
            </div>
          </div>
          <div className="form-main">
            <div className="form-first">
              <input
                className="form-input"
                type="text"
                placeholder="Name"
                required
                minLength={2}
              ></input>
              <input
                className="form-input"
                type="email"
                placeholder="Email*"
                required
              ></input>
              <div className="form-check-wrapper">
                <input type="checkbox" required name="browser"></input>
                <div className="form-check-text">
                  By including your personal data on this form you agree to it
                  being used in accordance with our Privacy Policy
                </div>
              </div>
            </div>
            <div className="form-second">
              <textarea
                className="form-message"
                name="text"
                placeholder="Start your message*"
              ></textarea>
              <button type="submit" className="button button-black">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
