/** @format */

import React, { Component } from "react";
import DenseTable from "../../container/txt";
import Chart from "../../container/Chart";

class Content extends Component {
	render() {
		return (
			<div className='panel-body'>
				<div className='row'>
					<div className='col-lg-7 col-xs-12 col-md-7'>
						<DenseTable />
					</div>
					<div className='col-lg-5 col-xs-12 col-md-5'>
						<Chart />
					</div>
				</div>
			</div>
		);
	}
}

export default Content;
