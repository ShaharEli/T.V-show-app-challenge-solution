import React from "react"
import {BrowserRouter as Router , Switch ,Route} from "react-router-dom"
import Home from "./components/Home"
import OneShow from "./components/OneShow"

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/show/:id">
                    <OneShow />
                </Route>
                <Route  path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
