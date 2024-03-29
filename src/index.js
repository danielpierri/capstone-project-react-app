import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { ContextProvider } from "./Context"
import App from "./App"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
)
