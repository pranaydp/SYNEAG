/** @format */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { contentDetails } from "../store/actions/ContentAction/contentaction";

import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Spinner from "../components/Spinner/Spinner";

const Tableheading = [
	"Project Name",
	"Framework Type",
	"Framework Subtype",
	"Pending Action",
	"",
];
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
	if (props.content === null) {
		return <Spinner />;
	} else {
		return (
			<div className='card' style={{ height: "305px" }}>
				<ProjectDetails projectlist={props.content} heading={Tableheading} />
			</div>
		);
	}
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
