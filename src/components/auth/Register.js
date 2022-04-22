import React from "react";

export const Register = () => {
  return (
    <div className="animate__animated animate__fadeIncontainer-fluid d-flex align-items-center justify-content-center p-2">
      <form className="d-flex flex-column gap-3 p-3 text-center w-75 border shadow m-auto">
        <h5>Sign up</h5>
        <input
          className="form-control text-center"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          className="form-control text-center"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          className="form-control text-center"
          type="password"
          name="password"
          placeholder="*******"
        />
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};
