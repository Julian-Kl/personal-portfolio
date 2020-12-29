import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bottomNav: {
      position: 'absolute',
        bottom: '0px',
      [theme.breakpoints.down('md')]: {
        display: 'none'
      },
      [theme.breakpoints.up('md')]: {
        width: '100%'
      },
      [theme.breakpoints.between(1620, 1920)]: {
        width: '1620px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '1620px',
      }
    }
  })
);


export const BottomNav: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Box mx="auto" p={4} display="flex" flexDirection="row-reverse" className={classes.bottomNav}>
        {props.children}
    </Box>
  );
}