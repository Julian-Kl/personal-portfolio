import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import { LanguageContext } from '../contexts/LanguageContext';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            [theme.breakpoints.down('sm')]: {
              display: 'none'
            }
        }
    }),
);


export const ContactButton: React.FC = (props) => {
  const classes = useStyles();
  const languageContext = useContext(LanguageContext);

  const contactButton = languageContext?.dictionary.contactButton;

  return (
    <Grow
          in={true}
          style={{ transformOrigin: '-100 0 0' }}
          {...{ timeout: 3000 }}
        >
      <Button endIcon={<ChatIcon className={classes.icon} />} variant="contained" size="large" onClick={() => console.log("Navigation")}>
        {contactButton}</Button>
    </Grow >
  );
}