import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { SkillCard } from '../../components/SkillCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { LanguageContext } from '../../contexts/LanguageContext';

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

export const Skills: React.FC = () => {
    const classes = useStyles();

    const languageContext = useContext(LanguageContext);

    const title = languageContext?.dictionary.skills.title!;

    return (
        <Box m={4}>
            <div className={classes.root}>
                <Box mb={3}>
                    <Typography component="h2" variant="h1" color="textPrimary" className={classes.headline}>{title}</Typography>
                </Box>
                <Grid container spacing={6} justify="center">
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <SkillCard skill={"one"} />
                    </Grid>
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <SkillCard skill={"two"} />
                    </Grid>
                    <Grid item lg={4} md={5} sm={6} xs={12}>
                        <SkillCard skill={"three"} />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}