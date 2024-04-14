import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import CustomButton from "./CustomButton";
import { useNavigate } from "react-router-dom";

const FormPart = ({
  emailInput,
  onEmailChange,
  passwordInput,
  onPasswordChange,
}) => {
  // State variables for validation errors and form submission status
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hook to access the history object for navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Email validation
    if (!emailInput.trim()) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(emailInput)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }

    // Password validation
    if (!passwordInput.trim()) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    // If both email and password are valid, navigate to the second page
    if (!emailError && !passwordError) {
      // Redirect to the second page
      navigate("/second_page");
    }

    setIsSubmitting(false);
  };

  const isButtonDisabled = isSubmitting || !!emailError || !!passwordError;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          value={emailInput}
          onChange={onEmailChange}
          error={!!emailError}
          helperText={emailError}
          sx={{ my: 1 }}
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          value={passwordInput}
          onChange={onPasswordChange}
          error={!!passwordError}
          helperText={passwordError}
          sx={{ my: 1 }}
        />
        <CustomButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={isButtonDisabled}
          sx={{ mt: 2 }}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </CustomButton>
      </form>
    </div>
  );
};

export default FormPart;
