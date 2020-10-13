import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"

import {ThemeProvider as Theme} from "styled-components"
import theme from "./theme"

ReactDOM.render(
    <Router>
        <Theme theme={theme}>
            <App />
        </Theme>
    </Router>,
    document.querySelector("#root")
)