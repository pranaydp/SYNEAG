/** @format */

// App.js

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min.js";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "../src/container/Content";
import Chart from "../src/container/Chart";


import store from "./store/store";
const App = () => {
	useEffect(() => {
		M.AutoInit();
	}, []);
	return (
		<Provider store={store}>
			<div>
				<Header />
				<div class='row'>
					{/*<div class='col s12'>
						This div is 12-columns wide on all screen sizes
	</div>*/}
					<div class='col s6'>
						<Content/>
					</div>
					<div class='col s6'>
						<Chart />
					</div>
				</div>
			</div>
		</Provider>
	);
};

export default App;
