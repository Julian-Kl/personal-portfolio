import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { LanguageContext } from '../../contexts/LanguageContext';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        headline: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '4em',
            }
        },
        contactTitle: {
            marginTop: 20
        }
    }),
);

export const LegalNotice: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.legalNotice.title!;
    const information = languageContext?.dictionary.legalNotice.information!;
    const contactTitle = languageContext?.dictionary.contact.title!;
    const mail = languageContext?.dictionary.contact.mail!;
    const telephone = languageContext?.dictionary.contact.telephone!;

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
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PermIdentityIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={information} />
                                    </ListItem>
                                </List>
                                <Divider />
                                <Typography gutterBottom variant="h5" component="h2" className={classes.contactTitle}>
                                    {contactTitle}
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PhoneIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={mail} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <MailIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={telephone} />
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </div>
        </Box>
    );
}