import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from './assets/logo.jpeg'
import {
  faCircleUser,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
const Form = () => {

  return (
    <div className="row justify-content-center align-items-center mt-5">
      <div className="d-flex col-md-8" style={{ boxShadow: "5px 5px 5px " }}>
        <div className="col-md-6 p-5" style={{ backgroundColor: "#3087D6" }}>
          <div className="container mt-5">
            <img src={Logo} alt="" height={"50px"} />
          </div>
          <div className=""></div>
        </div>
        <form action="" className="col-md-6 pb-5 ps-4">
          <div className="col-md">
            <h1 className="">Register</h1>
            <p>Create your account.It's free and only take a minute</p>
          </div>
          <div className="form-group col-md">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCircleUser} color="grey" />
              </span>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Your First Name"
                id="name"
              />
            </div>
            <span id="nameerror"></span>
          </div>
          <div className="form-group col-md mt-3">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCircleUser} color="grey" />
              </span>
              <input
                className="form-control"
                placeholder="Enter your Last name"
                type="text"
              />
            </div>
          </div>
          <div className="form-floating col-md mt-2">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="name@gmail.com"
              />
            </div>
            <span id="emailerror"></span>
          </div>
          <div className="form-group col-md mt-2">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCircleUser} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="form-group col-md mt-2">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name=""
                id=""
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <span id="passworderror"></span>
          </div>
          <div className="form-group col-md mt-2">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name=""
                id=""
                className="form-control"
                placeholder="Enter your confirm password"
              />
            </div>
            <span id="conpassworderror"></span>
          </div>
          <div className="col-md mt-5">
            <button
              className="btn text-white"
              type="submit"
              style={{ backgroundColor: "#5742A0" }}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form
