import { Component, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings'; 
import ChatIcon from '@mui/icons-material/Chat'; 
import TimelineIcon from '@mui/icons-material/Timeline'; 
import Dashboard from '../containers/Dashboard';
import Profile from '../containers/Profile';
import Projects from '../containers/Projects';
import  Settings from '../containers/Settings';
import {useNavigate} from "react-router-dom"
 
import { Button } from '@mui/material';

// import { selectSelectedItem, setSelectedItem } from '../app/features/menuSlice';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#70428f', 
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerComponent = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': { ...openedMixin(theme), backgroundColor: '#70428f' }, 
    }),
    backgroundColor: '#70428f',
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': { ...closedMixin(theme), backgroundColor: '#70428f' }, 
    }),
  })
);

export default function SideNav() {
  const navigate = useNavigate(); 
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [MenuItem, setMenuItem] = useState('Dashboard');
  
  const startNewProject=()=>{
          navigate('/projectapp/newproject/')
  }



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleMenuItemClick = (menuItem) => {
   
    setMenuItem(menuItem);
  };
  

  let componentToRender;

  switch (MenuItem) {
    case 'Dashboard':
      componentToRender = <Dashboard />;
      break;
    case 'Profile':
      componentToRender = <Profile />;
      break;
    case 'Projects':
      componentToRender = <Projects />;
      break;
    case 'Settings':
      componentToRender = <Settings />;
      break;
    default:
      componentToRender = <Dashboard />; 
  }

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar  >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
        Project Ease
      </Typography>
          <Button sx={{
            marginLeft:open? 110:130
        } } variant="contained" onClick={startNewProject}>
        Create New Project
      </Button>
          <div >
    <div>
     
    </div>
    
  </div>
        </Toolbar>
        <div sx={{ flex: '1', textAlign: 'right' }}>
   
    </div>
      </AppBar>
      <DrawerComponent variant="permanent" open={open}>
    
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Profile', icon: <AccountCircleIcon /> },
            { text: 'Projects', icon: <AssignmentIcon /> },
            { text: 'Main Dashboard', icon: <DashboardIcon /> },
            { text: 'Settings', icon: <SettingsIcon /> },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}
            onClick={() => handleMenuItemClick(item.text)}>
              <ListItemButton
                sx={{
                  minHeight: 88,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#70428f',
                    color:'#FFFFFF' 
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    '&:hover': {
                      backgroundColor: '#70428f', 
                    }
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerComponent>
      <Box component="main" sx={{ flexGrow: 1, p: 3,marginTop:10 }}>
        {componentToRender}
      </Box>
    </Box>
  );
}
