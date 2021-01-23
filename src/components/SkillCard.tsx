import React, { useContext } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { LanguageContext } from '../contexts/LanguageContext';

interface SkillCardInterface {
  skill: 'one' | 'two' | 'three'
}

interface Data {
  title: string,
  skills: string[],
  levels: number[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    }
  }),
);

export const SkillCard: React.FC<SkillCardInterface> = (props) => {
  const classes = useStyles();

  const languageContext = useContext(LanguageContext);

  let data: Data;
  switch (props.skill) {
    case "one":
      data = languageContext?.dictionary.skills.skillCards.one!;
      break;
    case "two":
      data = languageContext?.dictionary.skills.skillCards.two!;
      break;
    case "three":
      data = languageContext?.dictionary.skills.skillCards.three!;
      break;
  }

  const title = data.title;

  const generateLevel = (key: number) => {

    const levelDisplay = [];

    for (let i = 0; i <= 4; i++) {
      if (i < data.levels[key]) {
        levelDisplay[i] = <Brightness1Icon color="primary" />;
      } else {
        levelDisplay[i] = <RadioButtonUncheckedIcon color="primary" />;
      }
    }

    return levelDisplay;
  }

  const generateDivider = (key: number) => {
    if((key + 1) < data.skills.length){
      return (<Divider light variant="middle" component="li" />);
    } else {
      return null;
    }
  }

  const generateSkill = () => {
    return data.skills.map((skillNumber) =>
      <React.Fragment>
        <ListItem>
          <ListItemText
            primary={skillNumber}
          />
          {generateLevel(data.skills.indexOf(skillNumber))}
        </ListItem>
        {generateDivider(data.skills.indexOf(skillNumber))}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Box pt={2}>
          <Typography variant="h4" component="h3" align="center">
            {title}
          </Typography>
        </Box>
        <List>
          {generateSkill()}
        </List>
      </Paper>
    </div>
  );
}