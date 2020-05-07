/** @format */

import React, { Component } from "react";

class Content extends Component {
	render() {
		return (
			<div className='content-wrapper'>
				<section className='content-header'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='box'>
								<div className='box-header with-border'>
									<h3 className='box-title'>Hello Wel Come</h3>
								</div>
								<div className='box-body'>
									<div className='row'>
										<div className='col-md-8'>
											<p className='text-center'>
												<strong></strong>
											</p>
										</div>
									</div>
								</div>
								<div className='box-footer'>
									<div className='row'>
										<div className='col-sm-3 col-xs-6'>
											<div className='description-block border-right'>
												<span className='description-percentage text-green'></span>
												<h5 className='description-header'></h5>
												<span className='description-text'></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Content;
