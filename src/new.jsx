import React from "react";
import "./new.css";
import images from "./images/pic.jpg";
import crossIcon from "./images/crossIcon.svg"
import { useState } from "react";

function New({ data }) {
  const [isChecked, setIsChecked] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const [formData, setFormData] = useState({
    firstname: "",
    lname: "",
    age: "18",
    email: "",
    tel: "",
    state: "",
    country: "",
    address: "",
    intrest: "",
  });

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleClick() {
    
    // Validation for Name
  if (formData.firstname.trim() === "" || formData.lname.trim() === "") {
    alert("Please enter your full name.");
    return;
  }
  
  // Validation for Age
  const age = parseInt(formData.age);
  if (isNaN(age) || age < 18 || age > 100) {
    alert("Please enter a valid age between 18 and 100.");
    return;
  }

  // Validation for Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  //validation for tel
  const tel = /^[0-9]{10}$/;
  if (!tel.test(formData.tel)) {
    alert("Please enter a valid Number.");
    return;
  }

  // Validation for state
  if (formData.state.trim() === "") {
    alert("Please Select state.");
    return;
  }

  // Validation for country
  if (formData.country.trim() === "") {
    alert("Please Select country.");
    return;
  }

  // Validation for Address
  if (formData.address.trim() === "") {
    alert("Please Select Address.");
    return;
  }

  //validation for Intrest  
   if (formData.intrest.trim() === "") {
    alert("Please Fill Intrest box");
    return;
  }

  //checked box
  if (!isChecked) {
    alert("Please accept the conditions.");
    return;
  }

  setPopUp(!popUp);   
  }

  return (
    <>
      <div className="new-head">
        <header>User-Registration</header>
      </div>
      <br />
      <center>{data}</center>
      <div className="box">
        <div className="left-panel">
          <div className="container">
            <img src={images} alt="img" />
          </div>
        </div>
        <div className="right-panel">
          <div className="name">
            <label className="row1">Name</label>
            <div className="fname">
              <input
                type="text"
                value={formData.firstname}
                name="firstname"
                class="form"
                placeholder="First Name"
                onChange={handleChange}
              ></input>
            </div>
            <div className="lname">
              <input
                type="text"
                value={formData.lname}
                name="lname"
                class="form"
                placeholder="Last Name"
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <div className="row">
            <label htmlFor="Age" className="row">
              Age :-{" "}
            </label>
            <input
              type="range"
              name="age"
              className="form"
              placeholder="Age"
              min="1"
              max="70"
              step="1"
              value={formData.age}
              onChange={handleChange}
            />
            <span>{formData.age}</span> {/* Display the current range value */}
          </div>

          <div className="row">
            <label htmlFor="Email" className="row1">
              Email
            </label>
            <div className="email">
              <input
                type="text"
                value={formData.email}
                name="email"
                class="form"
                placeholder="Email"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <label className="row3">Tel</label>
            <div className="tel">
              <input
                type="number"
                value={formData.tel}
                pattern="[0-9]"
                maxlength="11"
                name="tel"
                class="form"
                id="telephone"
                placeholder="(+91)"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <label className="row4">State</label>
            <div className="state">
              <select
                className="form"
                name="state"
                id="stateSelect"
                value={formData.state}
                onChange={handleChange} // Call handleStateChange on change
              >
                <option value="">Select State</option>
                <option value="Madhya Pardesh">Madhya Pardesh</option>
                <option value="Maharastra">Maharastra</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Punjab">Punjab</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label className="row5">Country</label>
            <div className="country">
              <select
                value={formData.country}
                class="form"
                name="country"
                id="country Select"
                onChange={handleChange}
              >
                <option value="">Select country</option>
                <option value="IN">India</option>
                <option value="UK">United Kingdom</option>
                <option value="US">United States</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label className="row6">Address</label>
            <div className="address">
              <select
                name="address"
                value={formData.address}
                class="form"
                id="Address"
                onChange={handleChange}
              >
                <option value="">select address</option>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
              </select>
            </div>
          </div>
          <div className="row">
            <label className="row7">Intrests</label>
            <div className="intrests">
              <input
                type="text"
                value={formData.intrest}
                name="intrest"
                class="form"
                placeholder="Intrests"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <input
              type="checkbox"
              name="subscribeToNewsletter"
              className="form"
              placeholder="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <header>"Subscribe to the news letter"</header>
          </div>
          <div className="btn">
            <button onClick={handleClick} type="button">
              Submit
            </button>
          </div>
        </div>
      </div>

      {popUp && (<>
        <div className="popup-head">
            <div className="popup-semi">
              First Name: {formData.firstname} <br />
              Last Name: {formData.lname} <br />
              Age: {formData.age}<br />
              Email: {formData.email}<br />
              Tel: {formData.tel}<br />
              State: {formData.state}<br />
              Country:{formData.country}<br />
              Address: {formData.address}<br />
              Interests: {formData.intrest}<br />
              <br />
              Thank's for Submitting😍
            </div>

            <img onClick={handleClick} src={crossIcon} alt=".." style={{width: "50px", height: "50px", cursor: "pointer", float: "right"}} />
        </div> 
      </>)}

    </>
  );
}

export default New;