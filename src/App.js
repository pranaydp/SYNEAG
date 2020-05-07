/** @format */

// App.js

import React, { Component } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import MiniDrawer from "./components/Content/Index";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Sidebar />
				<Content />
			</div>
		);
	}
}

export default App;
