import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ChatIcon from '@material-ui/icons/Chat';
import { LanguageContext } from '../contexts/LanguageContext';
import { Text } from '../languages/LanguageHelper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contactButton: {
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        bottom: '40px',
        right: '40px'
      },
      [theme.breakpoints.up('sm')]: {
        bottom: '40px',
        right: '40px'
      },
    }
  })
);


export const ContactButton: React.FC = (props) => {
  const classes = useStyles();

  const text: string = Text('contactButton');

  return (
    <Box className={classes.contactButton}>
      <Button endIcon={<ChatIcon />} variant="outlined" size="large">
        Contact</Button>
    </Box>
  );
}