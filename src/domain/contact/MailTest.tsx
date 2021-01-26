import React from 'react';
import emailjs from 'emailjs-com';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(3)
            },
        },
        [theme.breakpoints.down('sm')]: {
            nameInput: {
                width: '100%',
            },
            companyNameInput: {
                width: '100%',
            }
        },
        [theme.breakpoints.up('sm')]: {
            nameInput: {
                width: '48%',
            },
            companyNameInput: {
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


export const MailForm: React.FC = () => {
    const classes = useStyles();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_3dx3v6s', 'template_ry0hr9j', e.target, 'user_tkv0s4rGA3NZZGTDXZMMo')
            .then((result) => {
                if (result.status === 200) {
                    alert("Nachricht erfolgreich gesendet");
                }
            }, (error) => {
                if (error.status === 400) {
                    alert("Fehler beim senden gesendet");
                }
            });
    }

    const showNumber = () => {
        alert("Number: +49 171 6275469");
    }

    return (
        <React.Fragment>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={sendEmail}>
                <TextField id="outlined-basic" className={classes.nameInput} label="name" type="text" name="user_name" variant="outlined" />
                <TextField id="outlined-basic" className={classes.companyNameInput} label="company" type="text" name="company_name" variant="outlined" />
                <TextField id="outlined-basic" fullWidth label="email" type="email" name="user_email" variant="outlined" />
                <TextField id="outlined-basic" fullWidth multiline rows={6} label="message" name="message" variant="outlined" />
                <Button variant="contained" color="primary" type="submit" value="Send" className={classes.marginButton}>
                    <MailIcon fontSize="small" className={classes.marginIcon} />Send
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={showNumber}>
                    <PhoneIcon fontSize="small" className={classes.marginIcon} />Phone
                </Button>
            </form>
        </React.Fragment>
    );
}