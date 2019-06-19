"use strict";

import "core-js/stable";
import "regenerator-runtime"; // https://babeljs.io/docs/en/babel-polyfill#usage-in-node-browserify-webpack

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// COMPONENTS
import Timer from "./src/components/home";

if (module.hot) {
	module.hot.accept();
}

// could make Header before Switch so it appears on every page:
// https://www.howtographql.com/react-apollo/4-routing/
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Timer} />
			<Redirect path="*" to="/" />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
