import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="primary"  component="h3"gutterBottom>
          Project Names Go here
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Manager
        </Typography>
       <Typography className={classes.pos} >
          abc.xyz@synechron.com
        </Typography>
        <div className="row">
        <div className='col-lg-6 col-xs-12 col-md-6'>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <ErrorOutlineIcon color="primary"/> Framework
        </Typography>
        <Typography className={classes.pos} >
          development
        </Typography>
        </div>

        <div className='col-lg-6 col-xs-12 col-md-6'>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <ErrorOutlineIcon color="primary"/> Sub Framework
        </Typography>
        <Typography className={classes.pos} >
          Unit Testing
        </Typography>
        </div>

        </div>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Project Description
        </Typography>
        <TextareaAutosize
        style={{width:"350px"}}
        height={250}
        rowsMax={55}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
/>
      </CardContent>
    
    </Card>
  );
}
