import React, { useState } from "react";
import classes from "./Form.module.css";
import { Fragment } from "react/cjs/react.production.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

const Form = () => {
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  const [formIsValid, setFormIsValid] = useState(true);

  const [fNameError, setFNameError] = useState("");
  const [mNameError, setMNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [dobError, setDobError] = useState("");

  const fNameHandler = (event) => {
    setFName(event.target.value);
  };
  const mNameHandler = (event) => {
    setMName(event.target.value);
  };
  const lNameHandler = (event) => {
    setLName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneNoHandler = (event) => {
    console.log(typeof event.target.value);
    setPhoneNo(event.target.value);
  };
  const dobHandler = (event) => {
    setDob(event.target.value);
  };
  const resetForm = () => {
    setFName(""),
      setMName(""),
      setLName(""),
      setEmail(""),
      setPhoneNo(""),
      setDob(""),
      setFormIsValid(true);

    setFNameError("");
    setMNameError("");
    setLNameError("");
    setEmailError("");
    setPhoneNoError("");
    setDobError("");
  };

  const validateForm = () => {
    let isValid = true;

    if (fName.trim().length === 0) {
      setFNameError("First Name is required");
      isValid = false;
    } else {
      setFNameError("");
    }

    if (mName.trim().length === 0) {
      setMNameError("Middle Name is required");
      isValid = false;
    } else {
      setMNameError("");
    }

    if (lName.trim().length === 0) {
      setLNameError("Last Name is required");
      isValid = false;
    } else {
      setLNameError("");
    }

    if (email.trim().length === 0) {
      setEmailError("Email is required");
      isValid = false;
    } else if (
      !email.includes("@") ||
      email.indexOf("@") === 0 ||
      email.indexOf("@") === email.length - 1
    ) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }

    if (phoneNo.trim().length === 0) {
      setPhoneNoError("Phone Number is required");
      isValid = false;
    } else if (phoneNo.trim().length > 0 && phoneNo.trim().length !== 10) {
      setPhoneNoError("Please Enter Phone number exact 10 digits");
      isValid = false;
    } else {
      setPhoneNoError("");
    }

    if (dob.trim().length === 0) {
      setDobError("DOB is required");
      isValid = false;
    } else {
      setDobError("");
    }

    return isValid;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    // if (
    //   fName.trim().length === 0 ||
    //   mName.trim().length === 0 ||
    //   lName.trim().length === 0 ||
    //   email.trim().length === 0 ||
    //   phoneNo.trim().length === 0 ||
    //   dob.trim().length === 0
    // ) {
    //   setFormIsValid(false);
    //   return;
    // } else if (!email.includes('@') || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
    //   setFormIsValid(false);
    //   return;
    // }

    const formData = {
      fName,
      mName,
      lName,
      email,
      phoneNo,
      dob,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
    resetForm();
  };
  return (
    <div className={classes.Frag}>
      {!formIsValid && <p className={classes.err}>Please Check Your Form</p>}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.inp}>
          <label htmlFor="fName" className={classes.lbl}>
            First Name
          </label>
          <div className={classes.iconinput}>
          <FontAwesomeIcon className={classes.iconi} icon="fa-solid fa-user" />
          <input
            className={classes.ip}
            id="fName"
            value={fName}
            type="text"
            placeholder="Enter your first name"
            onChange={fNameHandler}
          ></input>
          </div>
          
          {fNameError && <p className={classes.err}>{fNameError}</p>}
        </div>

        <div className={classes.inp}>
          <label htmlFor="mName" className={classes.lbl}>
            Middle Name
          </label>
          <div className={classes.iconinput}>
          <FontAwesomeIcon className={classes.iconi} icon="fa-solid fa-user" />
          <input
            className={classes.ip}
            id="mName"
            value={mName}
            type="text"
            placeholder="Enter your middle name"
            onChange={mNameHandler}
          ></input>
          </div>
          {mNameError && <p className={classes.err}>{mNameError}</p>}
        </div>

        <div className={classes.inp}>
          <label htmlFor="lName" className={classes.lbl}>
            Last Name
          </label>
          <div className={classes.iconinput}>
          <FontAwesomeIcon className={classes.iconi} icon="fa-solid fa-user" />
          <input
            className={classes.ip}
            id="lName"
            value={lName}
            type="text"
            placeholder="Enter your last name"
            onChange={lNameHandler}
          ></input>
          </div>
          {lNameError && <p className={classes.err}>{lNameError}</p>}
        </div>

        <div className={classes.inp}>
          <label htmlFor="email" className={classes.lbl}>
            Email
          </label>
          <div className={classes.iconinput}>
          <FontAwesomeIcon className={classes.iconi} icon="fa-solid fa-envelope" />
          <input
            className={classes.ip}
            id="email"
            value={email}
            type="text"
            placeholder="Enter yorr email"
            onChange={emailHandler}
            autoComplete="email"
          ></input>
          </div>
          {emailError && <p className={classes.err}>{emailError}</p>}
        </div>

        <div className={classes.inp}>
          <label htmlFor="phoneNo" className={classes.lbl}>
            Phone Number
          </label>
          <div className={classes.iconinput}>
          <FontAwesomeIcon className={classes.iconi} icon="fa-solid fa-phone" />
          <input
            className={classes.ip}
            id="phoneNo"
            value={phoneNo}
            type="number"
            placeholder="Enter your phone number"
            onChange={phoneNoHandler}
          ></input>
          </div>
          {phoneNoError && <p className={classes.err}>{phoneNoError}</p>}
        </div>
        
        <div className={classes.inp}>
          <label htmlFor="dob" className={classes.lbl}>
            Date Of Birth 
          </label>
          <div className={classes.iconinput}>
          <FontAwesomeIcon className={classes.calicon} icon="fa fa-calendar" />
          <input
            className={classes.c}
            id="dob"
            value={dob}
            type="date"
            placeholder="Enter your DOB"
            onChange={dobHandler}
          ></input>
          </div>
          {dobError && <p className={classes.err}>{dobError}</p>}
        </div>

        <div className={classes.btn}>
          <button className={classes.sub} type="submit">
            SUBMIT
          </button>
          <button className={classes.can} type="button" onClick={resetForm}>
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
