import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const SecondaryHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const menuItems = [
    { text: 'Mercedes-Benz Home', link: '#' },
    { text: 'Models', link: '#' },
    { text: 'Find & Buy', link: '#' },
    { text: 'Finance', link: '#' },
    { text: "Owner's Area", link: '#' },
    { text: 'Sell My Mercedes-Benz', link: '#' },
    { text: 'Locations', link: '#' },
  ];

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: '#000', boxShadow: 'none' }}>
        <Toolbar>
          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                href={item.link}
                sx={{ fontSize: '0.9rem', textTransform: 'none' }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Mercedes-Benz Logo */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg"
              alt="Mercedes-Benz Logo"
              style={{ height: '30px' }}
            />
          </Box>

          {/* Mobile Animated Line + Hamburger / Cross Icon on right */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              marginLeft: 'auto',
              gap: 1,
              width: '100%', // container width for running text + icon
            }}
          >
            {/* Animated running text */}
            <Box
              sx={{
                overflow: 'hidden',
                width: '100%',
                height: '20px',
                position: 'relative',
                // backgroundColor: '#222',
                borderRadius: '4px',
              }}
            >
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  color: 'white',
                  fontSize: '1rem',
                  // fontWeight: "9rem",
                  position: 'absolute',
                  willChange: 'transform',
                  animation: 'scrollText 8s linear infinite',
                  paddingLeft: '100%',
                }}
              >
                Unlock Premium Offers on Your Car Sale
              </Box>
            </Box>

            {/* Hamburger / Cross icon */}
            <IconButton
              color="inherit"
              onClick={toggleDrawer}
              aria-label={drawerOpen ? 'close menu' : 'open menu'}
              size="large"
            >
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dropdown Drawer */}
      <Collapse in={drawerOpen} timeout={{ enter: 1000, exit: 1000 }}>
        <Box
          sx={{
            width: '100%',
            bgcolor: '#000',
            color: 'white',
            boxShadow: 3,
            position: 'relative',
            zIndex: 10,
            paddingBottom: 0,
          }}
        >
          <List disablePadding>
            {menuItems.map((item, index) => (
              <ListItem
                button
                key={item.text}
                component="a"
                href={item.link}
                sx={{
                  textAlign: 'center',
                  borderBottom: index !== menuItems.length - 1 ? '1px solid #333' : 'none',
                  color: 'white',
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Collapse>

      {/* CSS animation keyframes */}
      <style>
        {`
          @keyframes scrollText {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SecondaryHeader;
