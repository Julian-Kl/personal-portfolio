import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import { LanguageContext } from '../contexts/LanguageContext';


export const ContactButton: React.FC = (props) => {
  const languageContext = useContext(LanguageContext);

  const contactButton = languageContext?.dictionary.contactButton;

  return (
    <Button endIcon={<ChatIcon />} variant="contained" size="large">
      {contactButton}</Button>
  );
}