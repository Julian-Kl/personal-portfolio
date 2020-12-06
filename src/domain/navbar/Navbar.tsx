import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar: React.FC = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box p={2}>
        <Button variant="outlined" className="color-dwhite-lblack" aria-controls="burger-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon fontSize="large"/>
        </Button>
        <Menu
          id="burger-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Start</MenuItem>
          <MenuItem onClick={handleClose}>Skills</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Legal Notice</MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
}
