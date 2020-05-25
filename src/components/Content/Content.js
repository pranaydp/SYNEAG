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
										<div className='container col-md-8 col-lg-6'>
											<div className=''>
												<h2>Hover Rows</h2>
												<p>
													The .table-hover class enables a hover state on table
													rows:
												</p>
												<table className='table table-hover'>
													<thead>
														<tr>
															<th>Firstname</th>
															<th>Lastname</th>
															<th>Email</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>John</td>
															<td>Doe</td>
															<td>john@example.com</td>
														</tr>
														<tr>
															<td>Mary</td>
															<td>Moe</td>
															<td>mary@example.com</td>
														</tr>
														<tr>
															<td>July</td>
															<td>Dooley</td>
															<td>july@example.com</td>
														</tr>
													</tbody>
												</table>
											</div>
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
