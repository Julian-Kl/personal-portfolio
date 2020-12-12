import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textBox: {
      [theme.breakpoints.down('xs')]: {
        marginTop: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '300px'
      },
      [theme.breakpoints.up('sm')]: {
        marginTop: '30%',
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '20%',
        width: '540px'
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: '20%',
        width: 'auto'
      }
    },
    headline: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '4em',
        lineHeight: '1em'
      },
      [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
        fontSize: '8em',
        lineHeight: '0.9em'
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        lineHeight: '1em'
      },
    },
    text: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        fontSize: '1.2em',
        marginTop: '0.4em'
      },
      [theme.breakpoints.up('sm')]: {
        textAlign: 'center',
        fontSize: '2em'
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '0.2em',
        textAlign: 'left',
      },
    }
  }),
);



export const About: React.FC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container fixed>
        <Box m={1} p={1}>
          <Box className={classes.textBox}>
            <Typography component="h1" variant="h1" color="textPrimary" className={classes.headline}>
              Julian Klummer
            </Typography>
            <Typography component="p" variant="body2" color="textPrimary" className={classes.text}>
              Online media generalist specialized in front end development
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}