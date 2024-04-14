import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const AppInitialized = ({ emailInput, passwordInput }) => {
  return (
    <Card
      sx={{
        backgroundColor: "black",
        color: "white",
        minWidth: "fit-content",
        height: "50%",
        marginTop: "16px",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
      }}
    >
      <CardContent sx={{ color: "yellowgreen" }}>
        <Typography>Application Initialized</Typography>
        <Typography>User is attempting to login...</Typography>
        <Typography>
          SELECT * FROM users Where email = '{emailInput}' and password = '
          {passwordInput} '{" "}
        </Typography>

        {/* Add Condition 
        if the credentials matched or not  */}
        <Typography>Credintials did not match, login failed.</Typography>
        {/* 
        If it is correct
         */}
        <Typography>User is attempting to login...</Typography>
        <Typography>
          SELECT * FROM users Where email = '{emailInput}' and password = '
          {passwordInput} '
        </Typography>
        <Typography>Logging in user "email = {emailInput}"</Typography>
      </CardContent>
    </Card>
  );
};

export default AppInitialized;
