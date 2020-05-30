/** @format */

import React, { Component } from "react";

import Chart from "../../container/Chart";
import Myprojects from "../../container/Myproject";
import Projectinfo from "../../container/ProjectInfo/Projectinfo";
import TabMenu from "../Tabs/TabMenu";
class Content extends Component {
	render() {
		return (
			<div className='panel-body ml-4'>
				<div className='row'>
					<div className='col-lg-7 col-xs-12 col-md-7'>
						<Myprojects />
					</div>
					<div className='col-lg-5 col-xs-12 col-md-5'>
						<Chart />
					</div>
				</div>
				<div className='row'>
					<div className='col-lg-4 col-xs-12 col-md-4'>
						<Projectinfo />
					</div>
					<div className='col-lg-8 col-xs-12 col-md-4'>
						<TabMenu />
					</div>
				</div>
			</div>
		);
	}
}

export default Content;
