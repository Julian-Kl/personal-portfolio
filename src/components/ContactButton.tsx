import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ChatIcon from '@material-ui/icons/Chat';
import { LanguageContext } from '../contexts/LanguageContext';
import { Navigation } from '@material-ui/icons';

interface Props {
  navigation: (target: "start" | "about" | "skills" | "portfolio" | "contact") => any
}

export const ContactButton: React.FC<Props> = (props) => {
  const languageContext = useContext(LanguageContext);

  const contactButton = languageContext?.dictionary.contactButton;

  return (
    <Button endIcon={<ChatIcon />} variant="contained" size="large" onClick={() => props.navigation("contact")}>
      {contactButton}</Button>
  );
}