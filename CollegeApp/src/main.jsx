import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthContext } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  </AuthContext>
);
