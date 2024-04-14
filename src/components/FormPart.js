import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import CustomButton from "./CustomButton";
import { TroubleshootOutlined } from "@mui/icons-material";

const FormPart = ({
  emailInput,
  onEmailChange,
  passwordInput,
  onPasswordChange,
  onSubmit,
}) => {
  // State variables for validation errors and form submission status
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    // if (!passwordInput.trim()) {
    //   setPasswordError("Password is required");
    // } else if (passwordInput === " OR :num=:num") {
    //   setPasswordError(" ");
    // }
    // //  else  {
    // //   setPasswordError("");
    // // }

    // If both email and password are valid, submit the form
    if (!emailError && !passwordError) {
      onSubmit();
    }

    setIsSubmitting(TroubleshootOutlined);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          fullWidth
          value={emailInput}
          onChange={onEmailChange}
          error={Boolean(emailError)}
          helperText={emailError}
          disabled={isSubmitting}
          sx={{ my: 1 }}
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          value={passwordInput}
          onChange={onPasswordChange}
          error={Boolean(passwordError)}
          helperText={passwordError}
          disabled={isSubmitting}
          sx={{ my: 1 }}
        />
        <CustomButton
          type="submit"
          variant="contained"
          fullWidth
          disabled={
            isSubmitting || Boolean(emailError) || Boolean(passwordError)
          }
          sx={{ mt: 2 }}
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </CustomButton>
      </form>
    </div>
  );
};

export default FormPart;
