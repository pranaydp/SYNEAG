/** @format */

import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";


import ProjectInfoDetails from "../../components/PorjectInfoDetails/ProjectInfo/Projectinfodetails";
import { _get_projectinfodetails } from "../../store/actions/ProjectInfo_actions/_projectInfo_actions";




function SimpleCard(props) {

    const { _getprojectinfodata } = props;


	useEffect(() => {
		debugger;
		setTimeout(() => {
			_getprojectinfodata();
		}, 100);
	}, []);
	console.log("projectinfo", props.projectinfo);

	return (
		<Fragment>
        <ProjectInfoDetails projectinfodata={props.projectinfo} />
		
		</Fragment>
	);
}


const mapstatetoprops = (state) => {
	return {
		projectinfo: state.projectinfo.projectinfodetails,
	};
};

const mapdispatchtoprops = (dispatch) => {
	return {
		_getprojectinfodata: () => dispatch(_get_projectinfodetails()),
	};
};

export default connect(mapstatetoprops, mapdispatchtoprops)(SimpleCard);