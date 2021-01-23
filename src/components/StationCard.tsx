import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { LanguageContext } from '../contexts/LanguageContext';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Divider from '@material-ui/core/Divider';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Station } from '../contexts/LanguageContext';


interface Props {
    station: 'one' | 'two' | 'three'
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        stationHeadline: {
            paddingTop: 10
        },
        avatar: {
            backgroundColor: theme.palette.primary.main
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        marginRight: {
            marginRight: 8
        }
    }),
);

export const StationCard: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const languageContext = useContext(LanguageContext);

    let data: Station;
    switch (props.station) {
        case "one":
            data = languageContext?.dictionary.about.stations.one!;
            break;
        case "two":
            data = languageContext?.dictionary.about.stations.two!;
            break;
        case "three":
            data = languageContext?.dictionary.about.stations.three!;
            break;
    }

    const generateIcon = () => {
        switch (data.icon) {
            case "WorkIcon":
                return <WorkIcon fontSize="large" />;
            case "SchoolIcon":
                return <SchoolIcon fontSize="large" />;
        }
    }

    return (
        <div className={classes.root}>
            <Box mb={4}>
                <Paper elevation={3}>
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Education" className={classes.avatar}>
                                    {generateIcon()}
                                </Avatar>
                            }
                            title={
                                <Typography gutterBottom variant="body1" component="h3">
                                    {data.title}
                                </Typography>
                            }
                            subheader={
                                <div>
                                    <Grid container spacing={6} justify="flex-start">
                                        <Grid item xs={7}>
                                            <Typography gutterBottom variant="body2" component="p">
                                                {data.institution}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography gutterBottom variant="body2" component="p" align="right">
                                                {data.duration}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Typography gutterBottom variant="body2" component="p">
                                        <LocationOnIcon fontSize="small" /> {data.location}
                                    </Typography>
                                </div>
                            }
                        />
                        <Divider />
                        <CardActions disableSpacing>
                            <IconButton aria-label="Open Website" target="blank" href={data.link} title={data.linkTitle} rel="alternate">
                                <OpenInNewIcon fontSize="small"  className={classes.marginRight} />
                                <Typography>
                                    Web
                                </Typography>
                            </IconButton>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <List dense>
                                    {data.infos.map((info) => (
                                        <ListItem>
                                            <ListItemText primary={info} />
                                        </ListItem>
                                    ))}
                                </List>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Paper>
            </Box>
        </div>
    );
}