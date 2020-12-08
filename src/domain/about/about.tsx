import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';


export const About: React.FC = () => {
  return (
    <React.Fragment>
      <Box p={2}>
        <Typography>Hello I'm Julian. This is my portfolio</Typography>
      </Box>
    </React.Fragment>
  );
}