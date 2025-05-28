import React from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        color: 'white',
        pt: { xs: 4, md: 6 },
        pb: 2,
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {/* Privacy & Legal */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Privacy & Legal
          </Typography>
          <List>
            {[
              'Cookie Policy',
              'Data Preferences',
              'Modern Slavery Policy',
              'Web Terms & Conditions',
              'T&Cs (Supply & Purchase)',
              'T&Cs (Service & Aftersales)',
              'FCA Commission Status Disclosure & Terms',
              'Registered Complaints',
            ].map((item) => (
              <ListItem key={item} sx={{ p: 0 }}>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#ccc',
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Brands */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Brands
          </Typography>
          <List>
            {[
              'Audi',
              'BMW',
              'Mercedes-Benz',
              'MINI',
              'Porsche',
              'Volvo',
              'Volkswagen',
              'Toyota',
              'Commercial',
              'Electric & Hybrid',
            ].map((item) => (
              <ListItem key={item} sx={{ p: 0 }}>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#ccc',
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Company Information */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}
          >
            Company Information
          </Typography>
          <List>
            {[
              'About Us',
              'Careers',
              'Latest News & Events',
              'Corporate Initiatives',
              'Accessibility',
              'Locations',
              'Sitemap',
            ].map((item) => (
              <ListItem key={item} sx={{ p: 0 }}>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiTypography-root': {
                      color: '#ccc',
                      fontSize: { xs: '0.85rem', md: '0.9rem' },
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Social Media, Trustpilot, and Review */}
        <Grid item xs={12} sm={6} md={3}>
          <Box>
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 1, mb: 2 }}>
              <IconButton sx={{ color: 'white' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <LinkedInIcon />
              </IconButton>
            </Box>

            {/* Trustpilot Rating */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: '#00b67a', fontSize: '1.25rem' }} />
                ))}
                <StarIcon
                  sx={{ color: '#00b67a', fontSize: '1.25rem', opacity: 0.5 }}
                />
              </Box>
              <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                TRUSTSCORE 4.7 | 16,318 REVIEWS
              </Typography>
            </Box>

            {/* Review Button */}
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                textTransform: 'none',
                fontSize: '0.85rem',
              }}
            >
              Review us on Trustpilot
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Box sx={{ mt: 4, textAlign: { xs: 'left', md: 'center' } }}>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: { xs: '0.75rem', md: '0.85rem' },
            mb: 1,
          }}
        >
          Isaac Agnew Holdings Ltd is a limited company registered in Northern Ireland Registered
          number: NI00668. Registered office: 18 Boucher Way, Belfast, BT12 6RE. The Agnew Group
          is part of Sytner Group Limited. Sytner Group Limited is authorised and regulated by
          the Financial Conduct Authority under FRN 310540.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: { xs: '0.75rem', md: '0.85rem' },
            mb: 1,
          }}
        >
          © 2025 Isaac Agnew Holdings Ltd. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: { xs: '0.75rem', md: '0.85rem' },
          }}
        >
          Automotive Web Site by Bluesky Interactive Ltd
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
