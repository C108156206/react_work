import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
//import { Button } from '@material-ui/core'; 一樣
import { makeStyles,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import SaveIcon from '@material-ui/icons/Save';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel,TextField, Typography } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import { InputAdornment} from '@material-ui/core/';
import { AccountCircle } from '@material-ui/icons';
import 'fontsource-roboto';
import { AppBar,Toolbar,IconButton,MenuItem,Menu } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';




function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                Photos
              </Typography>
              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                  <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
              < Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
    </div>
  );
}

const outerTheme = createMuiTheme({
  typography: {
    h2: {
      marginBottom: 10,
      background: 'linear-gradient(225deg, #e57373 10%, #81c784 100%)',
    },
    h4: {
      fontSize: 30,
      marginBottom: 10,
    },
  },
  palette: {
    primary: {
      main: "#dc004e",
    },
    secondary: {
      main: orange[400],
    },
    info: {
      main: "#64b5f6",
    },
  },
});

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)',
    border: 0,
    borderRadius: 80,
    color: 'white',
    padding: '5px 30px',
    marginBottom: 10,
  },
  textfileld: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 20,
    borderRadius: 80,
    color: 'white',
    padding: '5px 200px',
    marginBottom: 10,
  },
});

function ButtonStyled() {
  const classes=useStyles();
  return (
    <div className={classes.button}>
      <Button>
        <Typography variant="h4">
          自定義的按紐~
        </Typography>
      </Button>
    </div>
  );
}

function Checkedbox() {
  const [checked,setChecked] = React.useState(true);
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e)=>setChecked(e.target.checked)}
            inputProps={{
              'aria-label' : 'secondary checkbox'
            }}
          />
        }
        label="Checkbox_test"
      />
      <FormControlLabel
          control={
            <Checkbox 
            checked={checked} 
            onChange={(r)=>setChecked(r.target.checked)}
            inputProps={{
              'aria-label' : 'secondary checkbox'
            }}
            />
          }
          label="一起"
      />
    </FormGroup>
  );
}

function TextFeilds() {
  const classes = useStyles();
  return (
    <form className={classes.textfileld} noValidate autoComplete="off">
      <Typography variant="body1">
        example field
      </Typography>
      <div>
        <form>
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>

      <div>
        <TextField required
          id="standard-account-input"
          label="Account"
          placeholder="Account"
          color="secondary"
          InputProps={{
            startAdornment:(
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
            ),
          }}
        />
        <TextField required
          id="standard-password-input"
          label="Password"
          placeholder="Password"
          color="secondary"
          type="password"
          autoComplete="current-password"
        />
      </div>
    </form>
  );
}


function App() {
const [anchorEI, setAnchorEI] = React.useState(null);

const handleClick = (event) => {
  setAnchorEI(event.currentTarget);
};

const handleClose = () => {
  setAnchorEI(null);
};

  const classes = useStyles();
  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEI={anchorEI}
                keepMounted
                open={Boolean(anchorEI)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
              <Typography variant="h6" className={classes.title}>
                HOME
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" color="secondary">
            Hi~Welcome
          </Typography>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <Typography variant="title"></Typography>
          <Button 
            className={classes.button}
            startIcon={<SaveIcon />}
            endIcon={<SaveIcon />} 
            onClick={() => { alert('saved') }}
            variant="contained" 
            color="primary"
          >
            Save
          </Button>
          <Checkedbox />
          <TextFeilds/>
          <ButtonStyled />
          </p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
