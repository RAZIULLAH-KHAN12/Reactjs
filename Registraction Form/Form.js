import React, { useState, useEffect } from "react";
import classes from "./Form.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const Form = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [serialNumber, setSerialNumber] = useState(1);
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");

  const [fNameError, setFNameError] = useState("");
  const [mNameError, setMNameError] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [dobError, setDobError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  
  // let isEditing = false;

  const randomId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const editRowHandler = (index) => {
    const editedRowData = formDataList[index];
    setSerialNumber(editedRowData.serialNumber); // Update serialNumber state
    setFName(editedRowData.fName);
    setMName(editedRowData.mName);
    setLName(editedRowData.lName);
    setEmail(editedRowData.email);
    setPhoneNo(editedRowData.phoneNo);
    setDob(editedRowData.dob);
    setIsEditing(true); //set user in editing mode
  };

  const deleteRowHandler = (index) => {
    const updatedFormDataList = formDataList.filter((_, i) => i !== index);
    setFormDataList(updatedFormDataList);
  };

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
    setPhoneNo(event.target.value);
  };
  const dobHandler = (event) => {
    setDob(event.target.value);
  };

  const resetForm1 = () => {
    setFName("");
    setMName("");
    setLName("");
    setEmail("");
    setPhoneNo("");
    setDob("");

    setFNameError("");
    setMNameError("");
    setLNameError("");
    setEmailError("");
    setPhoneNoError("");
    setDobError("");
  };

  const resetForm = () => {
    if (isEditing) {
      const confirmCancel = window.confirm(
        "Are you sure you want to cancel updating the existing row?"
      );

      if (confirmCancel) {
        //OK
        resetForm1();
        setIsEditing(false); // Reset isEditing when canceling the edit
      } else {
        //CANCEL
        alert("User is interested for editing row!");
        // setIsEditing(false);
      }
    } else {
      resetForm1();
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (fName.trim().length === 0) {
      setFNameError("First Name is required");
      isValid = false;
    } else if (/\d/.test(fName)) {
      setFNameError("First Name not contain numbers");
      isValid = false;
    } else {
      setFNameError("");
    }

    if (mName.trim().length === 0) {
      setMNameError("Middle Name is required");
      isValid = false;
    } else if (/\d/.test(mName)) {
      setMNameError("Middle Name not contain numbers");
      isValid = false;
    } else {
      setMNameError("");
    }

    if (lName.trim().length === 0) {
      setLNameError("Last Name is required");
      isValid = false;
    } else if (/\d/.test(lName)) {
      setLNameError("Last Name not contain numbers");
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
      email.indexOf("@") === email.length - 1 ||
      !/\.[a-zA-Z]+$/.test(email)
    ) {
      setEmailError("Invalid Email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phoneNo.trim().length === 0) {
      setPhoneNoError("PhoneNo is required");
      isValid = false;
    } else if (phoneNo.trim().length > 0 && phoneNo.trim().length !== 10) {
      setPhoneNoError("Enter PhoneNo exact 10 digits");
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

    const newFormData = {
      id: randomId(),
      serialNumber,
      fName,
      mName,
      lName,
      email,
      phoneNo,
      dob,
    };

    // Check if there's an existing record with the same serialNumber
    const existingIndex = formDataList.findIndex(
      (data) => data.serialNumber === serialNumber
    );

    if (existingIndex !== -1) {
      // Update existing record
      const updatedFormDataList = [...formDataList];
      updatedFormDataList[existingIndex] = newFormData;
      setFormDataList(updatedFormDataList);
    } else {
      // Add new record
      setFormDataList((prevFormDataList) => [...prevFormDataList, newFormData]);
      setSerialNumber((prevSerialNumber) => prevSerialNumber + 1);
    }

    resetForm1();
  };

  return (
    <div className={classes.Container}>
      <form className={classes.Form} onSubmit={submitHandler}>
        <div className={classes.InputContainer}>
          <label htmlFor="fName" className={classes.Label}>
            First Name
          </label>
          <div className={classes.InputWrapper}>
            <div className={classes.IconInput}>
              <FontAwesomeIcon
                className={classes.Icon}
                icon="fa-solid fa-user"
              />
              <input
                className={classes.Input}
                id="fName"
                value={fName}
                type="text"
                placeholder="Enter your first name"
                onChange={fNameHandler}
              ></input>
            </div>
            {fNameError && (
              <p className={`${classes.Error} ${classes.errorMsgFirstName}`}>
                {fNameError}
              </p>
            )}
          </div>
        </div>

        <div className={classes.InputContainer}>
          <label htmlFor="mName" className={classes.Label}>
            Middle Name
          </label>
          <div className={classes.InputWrapper}>
            <div className={classes.IconInput}>
              <FontAwesomeIcon
                className={classes.Icon}
                icon="fa-solid fa-user"
              />
              <input
                className={classes.Input}
                id="mName"
                value={mName}
                type="text"
                placeholder="Enter your middle name"
                onChange={mNameHandler}
              ></input>
            </div>
            {mNameError && (
              <p className={`${classes.Error} ${classes.errorMsgMiddleName}`}>
                {mNameError}
              </p>
            )}
          </div>
        </div>

        <div className={classes.InputContainer}>
          <label htmlFor="lName" className={classes.Label}>
            Last Name
          </label>
          <div className={classes.InputWrapper}>
            <div className={classes.IconInput}>
              <FontAwesomeIcon
                className={classes.Icon}
                icon="fa-solid fa-user"
              />
              <input
                className={classes.Input}
                id="lName"
                value={lName}
                type="text"
                placeholder="Enter your last name"
                onChange={lNameHandler}
              ></input>
            </div>
            {lNameError && (
              <p className={`${classes.Error} ${classes.errorMsgLastName}`}>
                {lNameError}
              </p>
            )}
          </div>
        </div>

        <div className={classes.InputContainer}>
          <label htmlFor="email" className={classes.Label}>
            Email
          </label>
          <div className={classes.InputWrapper}>
            <div className={classes.IconInput}>
              <FontAwesomeIcon
                className={classes.Icon}
                icon="fa-solid fa-envelope"
              />
              <input
                className={classes.Input}
                id="email"
                value={email}
                type="text"
                placeholder="Enter yorr email"
                onChange={emailHandler}
                autoComplete="email"
              ></input>
            </div>
            {emailError && (
              <p className={`${classes.Error} ${classes.errorMsgEmail}`}>
                {emailError}
              </p>
            )}
          </div>
        </div>

        <div className={classes.InputContainer}>
          <label htmlFor="phoneNo" className={classes.Label}>
            PhoneNo
          </label>
          <div className={classes.InputWrapper}>
            <div className={classes.IconInput}>
              <FontAwesomeIcon
                className={classes.Icon}
                icon="fa-solid fa-phone"
              />
              <input
                className={classes.Input}
                id="phoneNo"
                value={phoneNo}
                type="number"
                placeholder="Enter your phone number"
                onChange={phoneNoHandler}
              ></input>
            </div>
            {phoneNoError && (
              <p className={`${classes.Error} ${classes.errorMsgPhone}`}>
                {phoneNoError}
              </p>
            )}
          </div>
        </div>

        <div className={classes.InputContainer}>
          <label htmlFor="dob" className={classes.Label}>
            Date Of Birth
          </label>
          <div className={classes.InputWrapper}>
            <div className={classes.IconInput}>
              <FontAwesomeIcon className={classes.Icon} icon="fa fa-calendar" />
              <input
                className={classes.Input}
                id="dob"
                value={dob}
                type="date"
                placeholder="Enter your DOB"
                onChange={dobHandler}
              ></input>
            </div>
            {dobError && (
              <p className={`${classes.Error} ${classes.errorMsgDob}`}>
                {dobError}
              </p>
            )}
          </div>
        </div>

        <div className={classes.ButtonContainer}>
          <button className={classes.SubmitButton} type="submit">
            SUBMIT
          </button>
          <button
            className={classes.CancelButton}
            type="button"
            onClick={resetForm}
          >
            CANCEL
          </button>
        </div>
      </form>
      <Paper elevation={3} className={classes.TablePaper}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr No</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>MIddle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Date Of Birth</TableCell>
                <TableCell>BUTTON</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {formDataList.map((formData, index) => (
                <TableRow key={index}>
                  <TableCell>{formData.serialNumber}</TableCell>
                  <TableCell>{formData.fName}</TableCell>
                  <TableCell>{formData.mName}</TableCell>
                  <TableCell>{formData.lName}</TableCell>
                  <TableCell>{formData.email}</TableCell>
                  <TableCell>{formData.phoneNo}</TableCell>
                  <TableCell>{formData.dob}</TableCell>
                  <TableCell>
                    <button onClick={() => editRowHandler(index)}>EDIT</button>
                    <button onClick={() => deleteRowHandler(index)}>
                      DELETE
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Form;
