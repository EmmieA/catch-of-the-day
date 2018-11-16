import React from "react";
import { render } from "react-dom";

import Router from "./components/Router";

import "./css/style.css";


// we have access to this render method because we imported it from the react-dom package
// the method takes 2 parameters: what to render and the mounting point
render(<Router />, document.querySelector('#main'));