import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { LanguageContext } from '../../contexts/LanguageContext';
import { SkillCard } from '../../components/SkillCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        }
    }),
);

export const Skills: React.FC = () => {

    const classes = useStyles();

    // Text
    const languageContext = useContext(LanguageContext);

    return (
        <Box m={4}>
            <div className={classes.root}>
                <Grid container spacing={6} justify="center">
                    <Grid item lg={3} md={4} sm={6} xs={10}>
                        <SkillCard title={languageContext?.dictionary.skillSection1.title!} skills={languageContext?.dictionary.skillSection1.skills!} levels={languageContext?.dictionary.skillSection1.levels!} />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={10}>
                        <SkillCard title={languageContext?.dictionary.skillSection1.title!} skills={languageContext?.dictionary.skillSection1.skills!} levels={languageContext?.dictionary.skillSection1.levels!} />
                    </Grid>
                    <Grid item lg={3} md={4} sm={6} xs={10}>
                        <SkillCard title={languageContext?.dictionary.skillSection1.title!} skills={languageContext?.dictionary.skillSection1.skills!} levels={languageContext?.dictionary.skillSection1.levels!} />
                    </Grid>
                    <Grid item lg={6} md={4} sm={6} xs={10}>
                        <SkillCard title={languageContext?.dictionary.skillSection1.title!} skills={languageContext?.dictionary.skillSection1.skills!} levels={languageContext?.dictionary.skillSection1.levels!} />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}