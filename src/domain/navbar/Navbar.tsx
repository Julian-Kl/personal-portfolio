import React, { useContext, useEffect } from 'react';
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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ContactButton } from '../../components/ContactButton';
import Grow from '@material-ui/core/Grow';

interface Props {
  navigation: (target: "start" | "about" | "skills" | "portfolio" | "contact") => any
}

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
    contactButton: {
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      }
    }
  }),
);

export const Navbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [anchorMainMenu, setAnchorMainMenu] = React.useState<null | HTMLElement>(null);
  const [anchorLanguageMenu, setLanguageMenu] = React.useState<null | HTMLElement>(null);
  const [themeToggle, setThemeToggle] = React.useState<boolean>(true);

  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  const itemOne = languageContext?.dictionary.start.title!;
  const itemTwo = languageContext?.dictionary.about.title!;
  const itemThree = languageContext?.dictionary.skills.title!;
  const itemFour = languageContext?.dictionary.portfolio.title!;
  const itemFive = languageContext?.dictionary.contact.title!;

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
    if (themeContext) {
      if (themeContext.theme === 'dark') {
        setThemeToggle(false)
        themeContext.setTheme('light')
      } else {
        setThemeToggle(true)
        themeContext.setTheme('dark')
      }
    } else {
      console.log('Theme Context Error: Neither default value or device value are set.')
    }
  };

  useEffect(() => {
    if (themeContext) {
      if (themeContext.theme === 'dark') {
        setThemeToggle(false)
      } else {
        setThemeToggle(true)
      }
    } else {
      console.log('Theme Context Error: Neither default value or device value are set.')
    }
  });

  let languageLabel = 'Language';
  if (languageContext?.userLanguage === 'en') {
    languageLabel = 'English';
  } else {
    languageLabel = 'Deutsch';
  }

  const changeLanguage = (props: string) => {
    languageContext?.setUserLanguage(props)
  }

  const renderContactButton = () => {

    return (
      <Grow
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {... { timeout: 2000 }}
      >
        <Box mx="auto" className={classes.contactButton}>
          <ContactButton navigation={props.navigation} />
        </Box>
      </Grow>
    );
  }

  return (
    <React.Fragment>
      <Toolbar>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {... { timeout: 1000 }}
        >
          <IconButton
            className={classes.menuButton}
            aria-controls="main-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Grow>
        <Menu
          id="main-menu"
          anchorEl={anchorMainMenu}
          keepMounted
          open={Boolean(anchorMainMenu)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => {
            handleClose();
            props.navigation("start");
          }}>{itemOne}</MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            props.navigation("about");
          }}>{itemTwo}</MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            props.navigation("skills");
          }}>{itemThree}</MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            props.navigation("portfolio");
          }}>{itemFour}</MenuItem>
          <MenuItem onClick={() => {
            handleClose();
            props.navigation("contact");
          }}>{itemFive}</MenuItem>
        </Menu>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {... { timeout: 1500 }}
        >
          <IconButton className={classes.collapse} aria-label="Open Website" target="blank" href="https://de.linkedin.com/in/julian-klummer-515a78170">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grow>
        {renderContactButton()}
        <div className={classes.grow}></div>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {... { timeout: 2500 }}
        >
        <Brightness4Icon onClick={changeTheme} />
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {... { timeout: 2500 }}
        >
        <FormControl>
          <Switch
            color="default"
            className={classes.collapse}
            checked={themeToggle}
            aria-label="theme-switch"
            onChange={changeTheme} size="medium" />
        </FormControl>
        </Grow>
        <Grow
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {... { timeout: 3000 }}
        >
          <Box ml="3">
            <Button
              startIcon={<TranslateIcon />}
              size="large"
              aria-controls="language-menu"
              aria-haspopup="true"
              onClick={handleClick}>
              <Typography className={classes.collapse}>
                {languageLabel}
              </Typography>
            </Button>
            <Menu
              id="language-menu"
              anchorEl={anchorLanguageMenu}
              keepMounted
              open={Boolean(anchorLanguageMenu)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => {
                changeLanguage('en');
                handleClose();
              }}>English</MenuItem>
              <MenuItem onClick={() => {
                changeLanguage('de');
                handleClose();
              }}>Deutsch</MenuItem>
            </Menu>
          </Box>
        </Grow>
      </Toolbar>
    </React.Fragment>
  );
}
