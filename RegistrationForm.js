// RegistrationForm.js

import React from 'react';
import './RegistrationForm.css'; // Importing the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import { useState } from 'react'; // Importing useState hook for managing state
import validation from './Validation'; // Importing the validation function

// Define the RegistrationForm component
function RegistrationForm() {
    // Define state variables for form values and errors
    const [values, setValues] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });
    const [errors, setErrors] = useState({});

    // Function to handle input change
    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    // Function to handle form submission and validation
    function handleValidation(e) {
        e.preventDefault(); // Prevent default form submission behavior
        setErrors(validation(values)); // Validate form values and set errors
    }

    // Render the RegistrationForm component
    return (
        <div className='signup_container w-100 d-flex justify-content-center mt-5'>
            <div className='signup_form mt-5 w-50'>
                <h4>SignUP Form Validation</h4>
                <div className='form mt-3'>
                    {/* Form for user registration */}
                    <form className='border p-3' onSubmit={handleValidation}>
                        {/* Email input */}
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" placeholder="Enter Email" value={values.email}
                            name="email" onChange={handleInput} className='form-control' />
                        {/* Display email validation error if exists */}
                        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                        {/* Password input */}
                        <label htmlFor="password" className='mt-2'><strong>Password:</strong></label>
                        <input type="password" placeholder="Enter Password"  value={values.password}
                            name="password" onChange={handleInput} className='form-control'/>
                        {/* Display password validation error if exists */}
                        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

                        {/* Confirm password input */}
                        <label htmlFor="confirm_password" className='mt-2'><strong>Confirm Password:</strong></label>
                        <input type="password" placeholder="Enter Confirm Password"  value={values.confirm_password}
                            name="confirm_password" onChange={handleInput}  className='form-control'/>
                        {/* Display confirm password validation error if exists */}
                        {errors.confirm_password && <p style={{color: "red"}}>{errors.confirm_password}</p>}

                        {/* Buttons for form actions */}
                        <div className='mt-3'>
                            <button className='btn btn-danger w-50'>Cancel</button>
                            <button className='btn btn-success w-50'>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm; // Export the RegistrationForm component
