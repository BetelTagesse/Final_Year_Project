// import React, { useState } from "react";
// import FormPart from "./FormPart";
// import CodeReview from "./CodeReview";

// const LiftedStateForm = () => {
//   const [emailInput, setEmailInput] = useState("");
//   const [passwordInput, setPasswordInput] = useState("");

//   const handleEmailChange = (event) => {
//     setEmailInput(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPasswordInput(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add logic to handle form submission
//   };

//   return (
//     <div>
//       <FormPart
//         emailInput={emailInput}
//         onEmailChange={handleEmailChange}
//         passwordInput={passwordInput}
//         onPasswordChange={handlePasswordChange}
//         onSubmit={handleSubmit}
//       />
//       <CodeReview emailInput={emailInput} passwordInput={passwordInput} />
//     </div>
//   );
// };

// export default LiftedStateForm;
