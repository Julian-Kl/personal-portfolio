import React, { useContext, useRef } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import IMGPortfolio from '../../assets/images/portfolio/Portfolio.jpg';
import IMGSmartShopping from '../../assets/images/portfolio/SmartShopping.jpg';
import IMGKickOff2020 from '../../assets/images/portfolio/KickOff2020.jpg';

import { LanguageContext } from '../../contexts/LanguageContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    navButtonLeft: {
      marginTop: 190,
      float: 'right',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    navButtonRight: {
      marginTop: 190,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    smNavigation: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    listTile: {
      minWidth: 320
    },
    headline: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '4em',
      }
    },
    right: {
      float: 'right'
    },
    marginRight: {
      marginRight: 8
    }
  }),
);

export const Portfolio: React.FC = () => {
  const classes = useStyles();

  let projects = [];

  const languageContext = useContext(LanguageContext);

  const language = languageContext?.userLanguage!;
  const title = languageContext?.dictionary.portfolio.title!;

  const scrollContainer = useRef<any>(null);

  if (language === "en") {
    projects = [
      {
        image: IMGPortfolio,
        title: "Portfolio",
        description: "Personal website about me to present my portfolio made with React and Material UI",
        liveLink: "http://julianklummer.de/",
        githubLink: "https://github.com/Julian-Kl/personal-portfolio"
      },
      {
        image: IMGSmartShopping,
        title: "SmartShopping",
        description: "A smart shopping card that gives personalized search results based on the consumers preferences.",
        liveLink: "https://smartshopping.team5.uber.space/",
        githubLink: "https://github.com/Julian-Kl/smartshoppingfrontend"
      },
      {
        image: IMGKickOff2020,
        title: "Kick Off 2020",
        description: "Landingpage for a cross media campaign for the study kick off 2020 of our new freshman",
        liveLink: "http://kickoff2020.paesure.com/",
        githubLink: "https://github.com/Julian-Kl/kickoff-2020-landingpage"
      }
    ]
  } else {
    projects = [
      {
        image: IMGPortfolio,
        title: "Portfolio",
        description: "Persönliche Website über mich, um meine Projekte zu präsentieren. Entwickelt mit React und Material UI",
        liveLink: "http://julianklummer.de/",
        githubLink: "https://github.com/Julian-Kl/personal-portfolio"
      },
      {
        image: IMGSmartShopping,
        title: "SmartShopping",
        description: "Eine intelligente Einkaufliste mit personalisierten Suchergebnissen basierend auf Benutzerpräferenzen",
        liveLink: "https://smartshopping.team5.uber.space/",
        githubLink: "https://github.com/Julian-Kl/smartshoppingfrontend"
      },
      {
        image: IMGKickOff2020,
        title: "Kick Off 2020",
        description: "Landingpage für eine cross-mediale Kampagne für den Studiums Kick Off 2020 unserer neuen Ersties",
        liveLink: "http://kickoff2020.paesure.com/",
        githubLink: "https://github.com/Julian-Kl/kickoff-2020-landingpage"
      }
    ]
  }


  return (
    <Box m={4}>
      <Box mb={3}>
        <Typography component="h2" variant="h1" color="textPrimary" className={classes.headline}>{title}</Typography>
      </Box>
      <div className={classes.root}>
        <Grid container spacing={4} justify="center">
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <IconButton aria-label="back" className={classes.navButtonLeft} onClick={() => {
              scrollContainer.current.scrollBy({ top: 0, left: -260, behavior: "smooth" });
            }}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item lg={10} md={10} sm={10} xs={12}>
            <GridList className={classes.gridList} cols={2.5} spacing={50} cellHeight="auto" ref={scrollContainer}>
              {projects.map((project) => (
                <GridListTile className={classes.listTile}>
                  <Card>
                    <CardActionArea href={project.liveLink} target="blank" title={project.title} rel="alternate">
                      <CardMedia
                        className={classes.media}
                        image={project.image}
                        title={project.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                          {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {project.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing>
                      <IconButton aria-label="Live" href={project.liveLink} target="blank" title="Live" rel="alternate">
                        <OpenInNewIcon className={classes.marginRight} />
                        <Typography>
                          Live
                        </Typography>
                      </IconButton>
                      <IconButton aria-label="Github" href={project.githubLink} target="blank" title="Github" rel="alternate">
                        <GitHubIcon className={classes.marginRight} />
                        <Typography>
                          Code
                        </Typography>
                      </IconButton>
                    </CardActions>
                  </Card>
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid item lg={1} md={1} sm={1} xs={1}>
            <IconButton aria-label="forward" className={classes.navButtonRight} onClick={() => {
              scrollContainer.current.scrollBy({ top: 0, left: 260, behavior: "smooth" });
            }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container className={classes.smNavigation} spacing={4} justify="center">
          <Grid item xs={4}>
            <IconButton aria-label="back" onClick={() => {
              scrollContainer.current.scrollBy({ top: 0, left: -260, behavior: "smooth" });
            }}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton aria-label="forward" className={classes.right} onClick={() => {
              scrollContainer.current.scrollBy({ top: 0, left: 260, behavior: "smooth" });
            }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}