import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { LanguageContext } from '../../contexts/LanguageContext';
import { StationCard } from '../../components/StationCard';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        img: {
            width: '100%',
            height: 'auto'
        }
    }),
);

export const About: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.about.title!;
    const description = languageContext?.dictionary.about.description!;
    const stations = languageContext?.dictionary.about.stations!;

    return (
        <Box m={4}>
            <div className={classes.root}>
                <Box mb={3}>
                    <Typography component="h2" variant="h1" color="textPrimary">{title}</Typography>
                </Box>
                <Grid container spacing={3} justify="flex-start">
                    <Grid item lg={3} md={5} sm={10} xs={10}>
                        <img src="https://via.placeholder.com/300" alt="Julian Klummer" className={classes.img}></img>
                    </Grid>
                    <Grid item lg={4} md={5} sm={10} xs={10}>
                        <Typography component="p" variant="body1" color="textPrimary">
                            {description}
                        </Typography>
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={10}>
                        <StationCard station={"one"} />
                        <StationCard station={"two"} />
                        <StationCard station={"three"} />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}