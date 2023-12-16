// SignUpForm.jsx
import React, { useState } from 'react';


const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // States for input validation and focus
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Basic email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
    setEmailValid(isValid);
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Basic password validation
    const isValid = inputPassword.length >= 8;
    setPasswordValid(isValid);
  };

  // Function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);

    // Check if confirm password matches password
    const isValid = inputConfirmPassword === password;
    setConfirmPasswordValid(isValid);
  };

  // Function to handle email input focus
 
  // Function to handle email input blur
  

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully!');
    } else {
      alert('Form cannot be submitted');
    }
  };

  return (
    <div className='form-div'>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        className={`  ${emailValid ? 'valid' : 'invalid'}`}
      />
      {!emailValid && <p>Enter a valid email address</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        className={` ${passwordValid ? 'valid' : 'invalid'}`}
      />
      {!passwordValid && <p >Password must be at least 8 characters</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        className={` ${confirmPasswordValid ? 'valid' : 'invalid'}`}
      />
      {!confirmPasswordValid && <p>Passwords do not match</p>}

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
