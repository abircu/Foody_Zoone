import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body{
      font-family: 'Inter', sans-serif;
      /* font-family: 'Poppins', sans-serif;; */
      background-color: #323343;
      color: white;
      min-height: 100vh;
    }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);
