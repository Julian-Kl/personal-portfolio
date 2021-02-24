import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Icon, Typography } from '@material-ui/core';
import { LanguageContext } from '../../contexts/LanguageContext';
import { StationCard } from '../../components/StationCard';
import IMGProfilWebp from '../../assets/images/about/profil.webp';
import IMGProfilJpg from '../../assets/images/about/profil.jpg';
import { EvStationRounded } from '@material-ui/icons';
import { Station } from '../../contexts/LanguageContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        img: {
            minWidth: 200,
            width: '100%',
            height: 'auto',
            borderRadius: '50%',
            overflow: 'hidden'
        },
        typo: {
            marginBottom: 20
        },
        headline: {
            [theme.breakpoints.down('sm')]: {
                fontSize: '4em',
            }
        }
    }),
);

export const About: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.about.title!;
    const description = languageContext?.dictionary.about.description!;

    const stationData = languageContext?.dictionary.about.stations!;


    return (
        <Box m={4}>
            <div className={classes.root}>
                <Box mb={3}>
                    <Typography component="h2" variant="h1" color="textPrimary" className={classes.headline}>{title}</Typography>
                </Box>
                <Grid container spacing={3} justify="center">
                    <Grid item lg={3} md={5} sm={10} xs={12}>
                        <img src={IMGProfilWebp} title="Julian Klummer" alt="Julian Klummer" className={classes.img}></img>
                    </Grid>
                    <Grid item lg={4} md={5} sm={10} xs={12}>
                        <Typography component="p" variant="body1" color="textPrimary" className={classes.typo}>
                            {description[0]}
                        </Typography>
                        <Typography component="p" variant="body1" color="textPrimary" className={classes.typo}>
                            {description[1]}
                        </Typography>
                        <Typography component="p" variant="body1" color="textPrimary" className={classes.typo}>
                            {description[2]}
                        </Typography>
                    </Grid>
                    <Grid item lg={5} md={10} sm={10} xs={12}>
                        {stationData.map((station: Station) =>
                            <StationCard 
                                title={station.title}
                                institution={station.institution} 
                                duration={station.duration}
                                location={station.location}
                                icon={station.location}
                                link={station.link}
                                linkTitle={station.linkTitle}
                                infos={station.infos} />    
                        )}
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}