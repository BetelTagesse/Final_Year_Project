import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const CodeReview = ({ emailInput, passwordInput }) => {
  const styles = {
    card: {
      backgroundColor: "black",
      color: "white",
      maxWidth: "fit-content",
      height: "auto",
      marginTop: "16px",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
    },
    header: {
      backgroundColor: "#AFE1AF", // Light green background color
      color: "black",
      padding: "18px 16px",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
    },
    title: {
      color: "black",
      textAlign: "center",
    },
    capitalText: {
      color: "#90caf9", // Light blue color
    },
    inputText: {
      color: "#96F97B",
    },
    line: (index) => ({
      marginLeft: `${index * 10}px`, // Indentation increases by 10px for each line
    }),
  };

  return (
    <Card sx={styles.card}>
      <CardHeader
        title="Code "
        sx={styles.header}
        titleTypographyProps={{ variant: "h6", sx: styles.title }}
      />
      <CardContent>
        <Typography variant="body1">
          <span style={{ ...styles.capitalText, ...styles.line(0) }}>
            SELECT{"   "}
          </span>
          * <br />
          <span style={{ ...styles.capitalText, ...styles.line(1) }}>
            FROM{" "}
          </span>
          users <br />
          <span style={{ ...styles.capitalText, ...styles.line(2) }}>
            WHERE{" "}
          </span>
          email = '<span style={{ ...styles.inputText }}>{emailInput}</span> '{" "}
          <br />
          <span style={{ ...styles.capitalText, ...styles.line(3) }}>AND </span>
          password = '
          <span style={{ ...styles.inputText }}>{passwordInput}</span> '
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CodeReview;
