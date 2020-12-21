import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
});

interface Props {
  title: string,
  skills: string[],
  levels: number[]
}

export const SkillCard: React.FC<Props> = (props) => {
  const classes = useStyles();

  console.log(props);

  return (
    <Box m={2}>
      <Card>
        <CardContent>
          <Typography variant="h4" component="h2" color="textPrimary" >
            {props.title}
          </Typography>
          <Box ml={0.4} mt={3}>
            <Typography variant="body1" component="p" color="textPrimary" display="inline">
              JavaScript
            </Typography>
          </Box>
          <Box ml={0.4} mt={3}>
            <Typography variant="body1" component="p" color="textPrimary">
              TypeScript
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}