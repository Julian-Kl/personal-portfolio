import React, { useState, useContext, useEffect } from 'react';
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
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { ThemeContext } from '../../contexts/ThemeContext';
import { LanguageContext } from '../../contexts/LanguageContext';
import { ContactButton } from '../../components/ContactButton';
import Grow from '@material-ui/core/Grow';
import { NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';

interface Props {
  navigation: (target: "start" | "about" | "skills" | "portfolio" | "contact" | "legalNotice") => any,
  siteContainer: string,
  background: boolean
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
    contactButton: {
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      }
    },
    translateIcon: {
      marginRight: 8
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    }
  })
);

export const Navbar: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [anchorMainMenu, setAnchorMainMenu] = useState<null | HTMLElement>(null);
  const [anchorLanguageMenu, setLanguageMenu] = useState<null | HTMLElement>(null);
  const [themeToggle, setThemeToggle] = useState<boolean>(true);

  const [backgroundColor, setBackgroundColor] = useState<'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'>("transparent");
  const [navbarElevation, setNavbarElevation] = useState<number>(0);

  useEffect(() => {
    if (props.background) {
      setBackgroundColor("secondary");
      setNavbarElevation(3);
    } else {
      setBackgroundColor("transparent");
      setNavbarElevation(0);
    }
  }, [props.background])


  const themeContext = useContext(ThemeContext);
  const languageContext = useContext(LanguageContext);

  const itemOne = languageContext?.dictionary.start.title!;
  const itemTwo = languageContext?.dictionary.about.title!;
  const itemThree = languageContext?.dictionary.skills.title!;
  const itemFour = languageContext?.dictionary.portfolio.title!;
  const itemFive = languageContext?.dictionary.contact.title!;
  const itemSix = languageContext?.dictionary.legalNotice.title!;

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
          <ContactButton />
        </Box>
      </Grow>
    );
  }

  const location  = useLocation();
  let home: boolean;
  if(location.pathname === '/'){
    home = true;
  } else {
    home = false;
  }

  return (
    <React.Fragment>
      <AppBar position="fixed" color={backgroundColor} elevation={navbarElevation} className={props.siteContainer}>
        <Toolbar>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {... { timeout: 1000 }}
          >
          {home ? <IconButton
              className={classes.menuButton}
              aria-controls="main-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            :
            <IconButton
            className={classes.menuButton}
            aria-controls="main-menu"
            aria-haspopup="true"
            href="/"
          >
            <ArrowBackIcon fontSize="large" />
          </IconButton>}
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
            <Divider />
            <NavLink to={{ pathname: "/legal" }} className={classes.link} activeClassName={classes.link} aria-label={itemSix} title={itemSix} rel="nofollow">
              <MenuItem onClick={() => {handleClose()}}>
                {itemSix}
              </MenuItem>
            </NavLink>
          </Menu>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {... { timeout: 1500 }}
          >
            <IconButton className={classes.collapse} aria-label="LinkedIn Profile" target="blank" href="https://de.linkedin.com/in/julian-klummer-515a78170" title="LinkedIn Profile">
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
            <IconButton onClick={changeTheme}>
              <Brightness4Icon />
              <FormControl>
                <Switch
                  color="default"
                  className={classes.collapse}
                  checked={themeToggle}
                  aria-label="theme-switch"
                  onChange={changeTheme} size="medium" />
              </FormControl>
            </IconButton>
          </Grow>
          <Grow
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {... { timeout: 3000 }}
          >
            <Box ml="3">
              <IconButton onClick={handleClick} aria-controls="language-menu" aria-haspopup="true">
                <TranslateIcon className={classes.translateIcon} />
                <Typography className={classes.collapse}>
                  {languageLabel}
                </Typography>
              </IconButton>
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
      </AppBar>
    </React.Fragment>
  );
}
