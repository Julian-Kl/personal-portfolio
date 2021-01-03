import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
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
        }
    }),
);

export const Contact: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.contact.title!;
    const mail = languageContext?.dictionary.contact.mail!;
    const telephone = languageContext?.dictionary.contact.telephone!;

    return (
        <Box m={4}>
            <Box mb={4}>
                <Typography component="h2" variant="h1" color="textPrimary">{title}</Typography>
            </Box>
            <div className={classes.root}>
                <Grid item xs={7}>
                    <Paper elevation={3}>
                        <Card>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <MailIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={mail} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <PhoneIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={telephone} />
                                    </ListItem>
                                </List>
                            </CardContent>
                            <Divider />
                            <CardActions disableSpacing>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grid>
            </div>
        </Box>
    );
}