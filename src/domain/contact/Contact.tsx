import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { LanguageContext } from '../../contexts/LanguageContext';
import emailjs from 'emailjs-com';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { ContactForm } from '../../components/ContactForm'


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        headline: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '4em',
            }
        }
    }),
);

export const Contact: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.contact.title!;

    return (
        <Box m={4}>
            <Box mb={4}>
                <Typography component="h2" variant="h1" color="textPrimary" className={classes.headline}>{title}</Typography>
            </Box>
            <div className={classes.root}>
                <Grid item lg={6} md={8} sm={10} xs={12}>
                    <Paper elevation={3}>
                        <Card>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </div>
        </Box>
    );
}