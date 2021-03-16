import React from "react";
import { Link } from "react-router-dom";
import "./AfterSignUp.scss";

const AfterSignUp = () => {
  return (
    <section className="after-sign-up-wrapper">
      <div className="after-sign-up">
        <p>Thank you for signing up to note-me.</p>
        <p>Please check your email to validate your account.</p>
        <p>
          Once validated, you can <Link to="/login">log-in</Link> to your
          note-me account.
        </p>
      </div>
    </section>
  );
};

export default AfterSignUp;
