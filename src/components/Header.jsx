import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Home', link: '#' },
    { text: 'Find & Buy', link: '#' },
    { text: 'Brands', link: '#' },
    { text: 'Sell Your Car', link: '#' },
    { text: 'Servicing & Repairs', link: '#' },
  ];

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ bgcolor: '#1a1a1a' }}>
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            Agnew
          </Typography>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              justifyContent: 'center',
              gap: 2,
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                href={item.link}
                sx={{ textTransform: 'uppercase', fontSize: '0.9rem' }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Icons */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <LocationOnIcon />
            </IconButton>
          </Box>

          {/* Hamburger Menu */}
          <IconButton
            color="inherit"
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Custom Drawer */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100%',
          width: '250px',
          bgcolor: '#1a1a1a',
          color: 'white',
          transform: drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.5s ease-in-out',
          zIndex: 1300,
          boxShadow: 3,
        }}
      >
        {/* Cross Icon inside Drawer */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 1,
          }}
        >
          <IconButton color="inherit" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Drawer Menu Items */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button="true"
              key={item.text}
              component="a"
              href={item.link}
              sx={{ borderBottom: '1px solid #333' }}
            >
              <ListItemText
                primary={item.text.toUpperCase()}
                primaryTypographyProps={{ textAlign: 'center', color: 'white' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default Header;
