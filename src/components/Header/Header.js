/** @format */

// Header.js
import React, { Component } from "react";

import "./Header.css";

const Header = () => {
	return (
		<header className='main-header'>
			<nav>
				<div className='nav-wrapper'>
					<a href='#' className='brand-logo'>
						<span className='logo-lg'></span>
					</a>

					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

// class Header extends Component {
// 	render() {
// 		return (
// 			<header className='main-header'>

// 				<a href='#' className='logo'>
// 					<span className='logo-mini'>
// 						<b>Speed</b>
// 					</span>
// 					<span className='logo-lg'>
// 						<b>Synechron</b>
// 					</span>
// 				</a>
// 				<nav className='navbar navbar-static-top'>
// 					<a
// 						href='#'
// 						className='sidebar-toggle'
// 						data-toggle='push-menu'
// 						role='button'>
// 						<span className='sr-only'>Toggle navigation</span>
// 					</a>
// 					<div className='navbar-custom-menu'>
// 						<ul className='nav navbar-nav'>
// 							<li className='dropdown messages-menu'>
// 								<a href='#' className='dropdown-toggle' data-toggle='dropdown'>
// 									<i className='fa fa-envelope-o'></i>
// 									<span className='label label-success'>4</span>
// 								</a>
// 								<ul className='dropdown-menu'>
// 									<li className='header'>You have 4 messages</li>
// 									<li>
// 										<ul className='menu'>
// 											<li>
// 												<a href='#'>
// 													<div className='pull-left'>
// 														<img
// 															src='img/user2-160x160.jpg'
// 															className='img-circle'
// 															alt='User Image'
// 														/>
// 													</div>
// 													<h4>
// 														Support Team
// 														<small>
// 															<i className='fa fa-envelope'></i> 5 mins
// 														</small>
// 													</h4>

// 													<p>Why not buy a new awesome theme?</p>
// 												</a>
// 											</li>
// 										</ul>
// 									</li>
// 								</ul>
// 							</li>

// 							<li className='dropdown messages-menu'>
// 								<a href='#' className='dropdown-toggle' data-toggle='dropdown'>
// 									<i className='fa fa-user-circle'></i>
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</header>
// 		);
// 	}
// }

export default Header;
