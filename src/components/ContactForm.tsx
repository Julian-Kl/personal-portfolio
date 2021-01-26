import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import emailjs from 'emailjs-com';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            '& > *': {
                marginTop: theme.spacing(3)
            },
        },
        [theme.breakpoints.down('sm')]: {
            nameInput: {
                width: '100%',
            },
            subjectInput: {
                width: '100%',
            }
        },
        [theme.breakpoints.up('sm')]: {
            nameInput: {
                width: '48%',
            },
            subjectInput: {
                width: '48%',
                float: 'right'
            }
        },
        marginIcon: {
            marginRight: 8
        },
        marginButton: {
            marginRight: theme.spacing(3)
        }
    }),
);

export const ContactForm: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.contact.title!;
    const contactFormNameInputLabel = languageContext?.dictionary.contact.contactFormNameInputLabel!;
    const contactFormSubjectInputLabel = languageContext?.dictionary.contact.contactFormSubjectInputLabel!;
    const contactFormEmailInputLabel = languageContext?.dictionary.contact.contactFormEmailInputLabel!;
    const contactFormMessageInputLabel = languageContext?.dictionary.contact.contactFormMessageInputLabel!;
    const contactFormSubmitButtonText = languageContext?.dictionary.contact.contactFormSubmitButtonText!;
    const contactFormPhoneButtonText = languageContext?.dictionary.contact.contactFormPhoneButtonText!;
    const mailMessageSuccess = languageContext?.dictionary.contact.mailMessageSuccess!;
    const mailMessageError = languageContext?.dictionary.contact.mailMessageError!;
    const telephoneMessage = languageContext?.dictionary.contact.telephoneMessage!;

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_3dx3v6s', 'template_ry0hr9j', e.target, 'user_tkv0s4rGA3NZZGTDXZMMo')
            .then((result) => {
                if (result.status === 200) {
                    alert(mailMessageSuccess);
                }
            }, (error) => {
                if (error.status === 400) {
                    alert(mailMessageError);
                }
            });
    }

    const showNumber = () => {
        alert(telephoneMessage);
    }

    return (
        <form className={classes.form} noValidate autoComplete="off" onSubmit={sendEmail}>
            <TextField id="name" className={classes.nameInput} label={contactFormNameInputLabel} type="text" name="user_name" variant="outlined" />
            <TextField id="subject" className={classes.subjectInput} label={contactFormSubjectInputLabel} type="text" name="subject" variant="outlined" />
            <TextField id="user-email" fullWidth label={contactFormEmailInputLabel} type="text" name="user_email" variant="outlined" />
            <TextField id="message" fullWidth multiline rows={6} label={contactFormMessageInputLabel} name="message" variant="outlined" />
            <Button variant="contained" color="primary" type="submit" value="Send" className={classes.marginButton}>
                <MailIcon fontSize="small" className={classes.marginIcon} />{contactFormSubmitButtonText}
            </Button>
            <Button variant="contained" color="primary" className={classes.button} onClick={showNumber}>
                <PhoneIcon fontSize="small" className={classes.marginIcon} />{contactFormPhoneButtonText}
            </Button>
        </form>
    );
}