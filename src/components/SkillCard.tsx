import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#2f2f2f'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    fontSize: '1.2em',
  },
  dotBox: {
    display: 'inline-block',
    alignContent: 'inherits'
  },
  dot: {
    display: 'inline-block',
    backgroundColor: '#2f2f2f',
    bottom: '20px',
    top: '30',
    marginLeft: '16px',
    width: '20px',
    height: '20px',
    borderStyle: 'solid',
    borderWidth: 'thin',
    borderRadius: '50%',
    borderColor: '#4d2b90'
  }
});

export const SkillCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box m={2}>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h2" color="secondary" >
          Programming
        </Typography>
        <Box ml={0.4} mt={3}>
          <Typography variant="body1" component="p" className={classes.pos} color="secondary" display="inline">
            JavaScript
          </Typography>
          <div className={classes.dotBox}>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
            <div className={classes.dot}></div>
          </div>
        </Box>
        <Box ml={0.4} mt={3}>
          <Typography variant="body1" component="p" className={classes.pos} color="secondary">
            TypeScript
          </Typography>
        </Box>
        <Box ml={0.4} mt={3}>
          <Typography variant="body1" component="p" className={classes.pos} color="secondary">
            Skill 1
          </Typography>
        </Box>
      </CardContent>
    </Card>
    </Box>
  );
}