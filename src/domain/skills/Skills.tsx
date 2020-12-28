import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
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

    return (
        <Box m={4}>
            <div className={classes.root}>
                <Grid container spacing={6} justify="center">
                    <Grid item lg={4} md={5} sm={6} xs={10}>
                        <SkillCard skill={"one"} />
                    </Grid>
                    <Grid item lg={4} md={5} sm={6} xs={10}>
                        <SkillCard skill={"two"} />
                    </Grid>
                    <Grid item lg={4} md={5} sm={6} xs={10}>
                        <SkillCard skill={"three"} />
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
}