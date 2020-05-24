/** @format */

// App.js

import React, { Component } from "react";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

import store from "./store/store";
const App = () => {
	return (
		<Provider store={store}>
			<div>
				<Header />
				<Sidebar />
				<Content />
			</div>
		</Provider>
	);
};

export default App;
