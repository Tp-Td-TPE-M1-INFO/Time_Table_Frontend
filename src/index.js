import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// React Alert import
import { AlertProvider } from 'react-alert-with-buttons'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AlertProvider
  containerStyle={{ backgroundColor: "white",color:"black",textAlign:"center" }}
  defaultConfirmText="Yes"
  buttonStyle={{ backgroundColor: "var(--primary)", color:"white" }}>
    <React.StrictMode>
      <BrowserRouter>
        <ProSidebarProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ProSidebarProvider>
      </BrowserRouter>
    </React.StrictMode>
  </AlertProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
