import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from "react-redux";

import {contentDetails}  from '../store/actions/ContentAction/contentaction'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 function Myprojects(props) {
	 const {getProject}=props
  const classes = useStyles();
useEffect(()=>{
	debugger;
	projectlist();
},[])

const projectlist=()=>{
	getProject()
}

console.log("projects",props)
  return (
      <div className="col-6">
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Project Name</TableCell>
            <TableCell align="right">Framework Type</TableCell>
            <TableCell align="right">Framework Subtype</TableCell>
			<TableCell align="right">Pending Action</TableCell>
			<TableCell></TableCell>

          
          </TableRow>
        </TableHead>
        <TableBody>
          {props.content!==null? props.content.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Projectname}
              </TableCell>
              <TableCell align="right">{row.Frameworktype}</TableCell>
              <TableCell align="right">{row.Suntype}</TableCell>
              <TableCell><Button variant="outlined" color="primary">
              Add Matruirty
            </Button></TableCell>
            <TableCell><Button variant="outlined" color="primary">
            Add quality 
          </Button></TableCell>
            </TableRow>
          )):""}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

const mapStateToProps = state => {
	return {
	  content: state.content.myproject
	};
  };
  
  const mapDispatchToProps = dispatch => {
	return {
		getProject:() => dispatch(contentDetails())
	};
  };

export default connect(mapStateToProps,mapDispatchToProps)(Myprojects)
