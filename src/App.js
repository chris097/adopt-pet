import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchForm from './SearchForm';
import "regenerator-runtime/runtime";
import "core-js";
import {Link, Router} from "@reach/router";
import Details from './Details';
import ThemeContext from './ThemeContext';


const App = () => {
    const themeHook = useState("darkBlue")
    return(
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
        <div id="container">
            <header>
                <Link to="/">
                    Adopt Me!
                </Link>
            </header>
        <Router>
        <SearchForm path="/" />
        <Details path="details/:id" />
        </Router>
        </div>
        </ThemeContext.Provider>
        </React.StrictMode>

    )
};

render(<App />, document.getElementById("root"));
