/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { contentDetails } from "../store/actions/ContentAction/contentaction";

import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

const Myprojects = (props) => {
	const { getProject } = props;

	useEffect(() => {
		debugger;
		projectlist();
	}, []);

	const projectlist = () => {
		getProject();
	};

	console.log("projects", props);
	return (
		<div>
			<ProjectDetails projectlist={props.content} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		content: state.content.myproject,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getProject: () => dispatch(contentDetails()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Myprojects);
