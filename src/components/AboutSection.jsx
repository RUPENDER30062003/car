
import { Box, Typography, Button } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f5',
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: '#333',
          fontWeight: 'bold',
          mb: { xs: 2, md: 3 },
          fontSize: { xs: '1rem', md: '1.5rem' },
        }}
      >
        Discover the Passion
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#666',
          maxWidth: '800px',
          mx: 'auto',
          mb: { xs: 2, md: 4 },
          fontSize: { xs: '0.85rem', md: '1rem' },
          lineHeight: 1.6,
        }}
      >
        Mercedes-Benz are inspired by an enduring passion for the pursuit of excellence whilst continuing to develop and innovate. This inspiration keeps Mercedes-Benz at the pinnacle of automotive design and manufacture. At Mercedes-Benz NI we constantly strive to deliver the best possible experience to every customer and visitor at our Showrooms in Belfast and Portadown. We offer the full range of new and used Mercedes-Benz cars, our electric/hybrid stock, servicing, and parts. We have over 150 Approved Used Mercedes-Benz and one of the largest official Servicing and Workshop facilities in Northern Ireland.
      </Typography>
      <Button
        variant="outlined"
        sx={{
          borderColor: '#333',
          color: '#333',
          textTransform: 'uppercase',
          fontSize: { xs: '0.8rem', md: '1rem' },
          px: { xs: 3, md: 4 },
          py: { xs: 1, md: 1.5 },
          '&:hover': {
            borderColor: '#000',
            color: '#000',
          },
        }}
      >
        Learn More About Mercedes-Benz
      </Button>
    </Box>
  );
};

export default AboutSection;
