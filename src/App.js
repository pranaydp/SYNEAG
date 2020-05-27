/** @format */

// App.js

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min.js";

import Header from "./components/Header/Header";
import store from "./store/store";
import Content from "./components/Content/Content";
const App = () => {
	useEffect(() => {
		M.AutoInit();
	}, []);
	return (
		<Provider store={store}>
			<div>
				<Header />
				<Content />
			</div>
		</Provider>
	);
};

export default App;
