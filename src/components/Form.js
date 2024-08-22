import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Logo from './assets/logo.jpeg';
import './Form.css';
import {
  faCircleUser,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGooglePlus, faTwitter} from '@fortawesome/free-brands-svg-icons'
const Form = () => {
  const [formData,setFormData] = useState({
    firstName : '',
    lastName : '',
    email: '',
    userName : '',
    password: '',
    confirmPassword : '',
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) =>{
    const {name,value} = event.target;
    setFormData({...formData,[name]: value});
  }
  let emailPattern =
    /^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-zA-Z]+).([a-zA-Z]{2,20})$/;
  let upperCasePattern = /[A-Z]/;
  let lowerCasePattern = /[a-z]/;
  let numberPattern = /[0-9]/;
  let specialCharacterPattern = /[~!@#%&()$^_?]/;
  let minlengthCharacterPattern = /^.{8,16}$/;
  const validateForm = () => {
    let valid = true;
    let newErrors = [];
    if(!formData.firstName){
      newErrors.firstName = "First Name is required";
      valid = false;
    }else{
      newErrors.firstName = " ";
    }
    if(!formData.lastName){
      newErrors.lastName = "Last Name is required"; 
      valid = false;
    }else{
      newErrors.lastName = " ";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    }else {
      if(!emailPattern.test(formData.email)){
        newErrors.email = "Enter valid email";
        valid = false;
      }else{
        newErrors.email = " ";
      } 
    }
    if(!formData.userName){
      newErrors.userName = "User name is required ";
      valid = false;
    }else{
      newErrors.userName = " ";
    }
    if(!formData.password){
      newErrors.password = "Password is required";
      valid = false;
    }else{
      if (!minlengthCharacterPattern.test(formData.password)) {
        newErrors.password = "password must be between 8 to 16 characters";
        valid=false;
      } else if (!lowerCasePattern.test(formData.password)) {
        newErrors.password = "At least 1 lowercase character";
        valid = false;
      } else if (!numberPattern.test(formData.password)) {
        newErrors.password = "At least 1 number";
        valid = false;
      } else if (!specialCharacterPattern.test(formData.password)) {
        newErrors.password = "At least 1 special character";
        valid = false;
      } else if (!upperCasePattern.test(formData.password)) {
        newErrors.password = "At least 1 uppercase character";
        valid = false;
      } else {
        newErrors.password = " ";
      }
    }
    if(!formData.confirmPassword){
      newErrors.confirmPassword = "Confirm password is required";
      valid = false;
    }else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        "Check your confirm password and password should be same";
      valid = false;
    }else{
      newErrors.confirmPassword = "";
    }
    setErrors(newErrors);
    return valid;
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully" ,formData);
    }
  }
  return (
    <div
      className="row justify-content-center align-items-center mt-5"
    >
      <div
        className="d-flex col-md-8 pt-5 px-4"
        style={{
          boxShadow: "5px 5px 5px ",
          backgroundColor: "#3087D6",
          borderRadius: "15px",
        }}
      >
        <div className="col-md-6 p-5" style={{ backgroundColor: "#3087D6" }}>
          <div className="container mt-5">
            <img src={Logo} alt="" height={"50px"} />
            <h6 className="text-white">STUDIO</h6>
          </div>
          <div className="container mt-5">
            <p className="text-white mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div>
              <button
                className="btn"
                type="button"
                style={{ color: "white", backgroundColor: "transparent" }}
              >
                Register
              </button>
              <button
                className="btn mx-4"
                type="submit"
                style={{ backgroundColor: "#5742A0", color: "white",padding:"10px 35px",borderRadius:"25px" }}
              >
                Login
              </button>
            </div>
            <div
              className="container mt-5"
              style={{ borderBlockStartColor: "White" }}
            >
              <div className="mt-5 text-white">
                <p className="text-white">
                  {" "}
                  ---------------Sign up with---------------
                </p>
              </div>
              <span className="text-white fs-4">
                <FontAwesomeIcon icon={faGooglePlus} />
              </span>
              <span className="mx-3 text-white fs-4">
                <FontAwesomeIcon icon={faFacebook} />
              </span>
              <span className="text-white fs-4">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </div>
          </div>
        </div>
        <form
          action=""
          className="col-md-6 pb-5 px-5"
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#B6D9EC",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <div className="col-md">
            <h1 className="" style={{ float: "left", color: "#6988AF" }}>
              Register
            </h1>
            <p className="" style={{ float: "left", color: "#6988AF" }}>
              Create your account.It's free and only take a minute
            </p>
          </div>
          <div className="form-group col-md">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCircleUser} color="grey" />
              </span>
              <input
                className="form-control"
                type="text"
                name="firstName"
                placeholder="Enter Your First Name"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <span
              className="error-message"
              style={{ float: "left", height: "20px" }}
            >
              {errors.firstName}
            </span>
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
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <span
              className="error-message"
              style={{ float: "left", height: "20px" }}
            >
              {errors.lastName}
            </span>
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <span
              className="error-message"
              style={{ float: "left" }}
            >
              {errors.email}
            </span>
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
                name="userName"
                id="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </div>
            <span
              className="error-message"
              style={{ float: "left", height: "20px" }}
            >
              {errors.userName}
            </span>
          </div>

          <div className="form-group col-md mt-2">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <span
              className="error-message"
              style={{ float: "left", height: "20px" }}
            >
              {errors.password}
            </span>
          </div>
          <div className="form-group col-md mt-2">
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
                placeholder="Enter your confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <span
              className="error-message"
              style={{ float: "left", height: "20px" }}
            >
              {errors.confirmPassword}
            </span>
          </div>
          <div className="col-md mt-5">
            <a className='mt-3'
              href="./"
              target=""
              style={{
                float: "left",
                textDecoration: "none",
                color: "#6988AF",
              }}
            >
              Already a member? SignIn
            </a>
            <button
              className="btn text-white fs-5"
              type="submit"
              style={{ backgroundColor: "#5742A0", float: "right",padding: "10px 45px",borderRadius:"25px" }}
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
