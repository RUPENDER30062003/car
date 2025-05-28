import React from 'react';
import { Box, Typography } from '@mui/material';
import CarImage from './Car.png'; // Adjust the path to match your file structure

const ShowroomSection = () => {
  return (
    <Box
      sx={{
        // width: '100%',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        textAlign: 'center',
        bgcolor: '#fff',
      }}
    >
      {/* Showroom Image */}
      <Box
        sx={{
        //   width: '100%',
        //   maxWidth: '1200px',
          mx: 'auto',
          mb: 2,
          height: { xs: '300px', md: '500px' },
              backgroundImage: `url(${CarImage})`, // Use the imported image
          
          // background: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        //   borderRadius: 2,
        }}
      />

      {/* Caption */}
      <Typography
        variant="h6"
        sx={{
          color: '#333',
          fontSize: { xs: '1rem', md: '1.25rem' },
        //   fontStyle: 'italic',
        }}
      >
        Luxury Mercedes-Benz Showroom – Belfast
      </Typography>
    </Box>
  );
};

export default ShowroomSection;