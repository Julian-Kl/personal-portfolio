import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import FormControl from '@material-ui/core/FormControl';
import Box from '@material-ui/core/Box';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    collapse: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      }
    },
  }),
);

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const [anchorMainMenu, setAnchorMainMenu] = React.useState<null | HTMLElement>(null);
  const [anchorLanguageMenu, setLanguageMenu] = React.useState<null | HTMLElement>(null);
  const [themeToggle, setThemeToggle] = React.useState<boolean>(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    let target = event.currentTarget.getAttribute('aria-controls');
    if (target === 'main-menu') {
      setAnchorMainMenu(event.currentTarget);
    } else if (target === 'language-menu') {
      setLanguageMenu(event.currentTarget);
    } else {
      console.log("Error: aria-control target of button is set to a value to which no menu exists.")
    }
  };

  const handleClose = () => {
    setAnchorMainMenu(null);
    setLanguageMenu(null);
  };

  const changeTheme = () => {
    { themeToggle ? setThemeToggle(false) : setThemeToggle(true) }
  };

  return (
    <div>
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          aria-controls="main-menu"
          aria-haspopup="true"
          color="secondary"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <Menu
          id="main-menu"
          anchorEl={anchorMainMenu}
          keepMounted
          open={Boolean(anchorMainMenu)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Skills</MenuItem>
          <MenuItem onClick={handleClose}>Portfolio</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
        <div className={classes.grow} />
        <Brightness4Icon color="secondary" onClick={changeTheme} />
        <FormControl>
          <Switch
            className={classes.collapse}
            checked={themeToggle}
            color="secondary"
            aria-label="theme-switch"
            onChange={changeTheme} size="medium" />
        </FormControl>
        <Box ml="3">
          <Button startIcon={<TranslateIcon />} size="large" aria-controls="language-menu" aria-haspopup="true" color="secondary" onClick={handleClick}>
            <Typography className={classes.collapse}>
              English
            </Typography>
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorLanguageMenu}
            keepMounted
            open={Boolean(anchorLanguageMenu)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>English</MenuItem>
            <MenuItem onClick={handleClose}>German</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </div>
  );
}
