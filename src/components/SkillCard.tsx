import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Brightness1Icon from '@material-ui/icons/Brightness1';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    }
  }),
);

interface Props {
  title: string,
  skills: string[],
  levels: number[]
}

export const SkillCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  console.log(props);

  function generate() {
    return [0, 1, 2].map((value) =>
      <React.Fragment>
        <ListItem>
          <ListItemText
            primary="TypeScript"
          />
          <Brightness1Icon color="primary" />
          <Brightness1Icon color="primary" />
          <Brightness1Icon color="primary" />
          <RadioButtonUncheckedIcon color="primary" />
          <RadioButtonUncheckedIcon color="primary" />
        </ListItem>
        <Divider />
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Box pt={2}>
          <Typography variant="h4" component="h2" align="center">
            {props.title}
          </Typography>
        </Box>
        <List>
          {generate()}
        </List>
      </Paper>
    </div>
  );
}