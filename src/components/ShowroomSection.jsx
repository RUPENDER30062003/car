import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Fade, IconButton } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CarImag5 from './car1.jpg';
import CarImag1 from './car2.jpg';
import CarImag2 from './car3.jpg';
import CarImag3 from './car5.jpg';
import CarImag4 from './car6.jpg';

// Array of images with captions
const carouselItems = [
  { src: CarImag5, caption: 'Luxury Mercedes-Benz Showroom – Belfast' },
  { src: CarImag1, caption: 'BMW Excellence Center – Dublin' },
  { src: CarImag2, caption: 'Audi Premium Gallery – London' },
  { src: CarImag3, caption: 'Jaguar Elite Studio – Manchester' },
  { src: CarImag4, caption: 'Porsche Design Hub – Edinburgh' },
];

const ShowroomSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images
  useEffect(() => {
    const preloadImages = carouselItems.map((item) => {
      const img = new Image();
      img.src = item.src;
      img.loading = 'eager';
      img.onerror = () => console.error(`Failed to load image: ${item.src}`);
      return img;
    });

    return () => {
      // Cleanup (optional, images are cached by browser)
      preloadImages.forEach((img) => (img.src = ''));
    };
  }, []);

  // Auto-transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle manual dot click
  const handleDotClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <Box
      sx={{
        // py: { xs: 4, md: 6 },
        textAlign: 'center',
        bgcolor: '#fff',
      }}
    >
      {/* Image Carousel */}
      <Box
        sx={{
          // mx: 'auto',
          // mb: 4,
          width: { xs: '100%', md: '100%' },
          height: { xs: '300px', md: '600px' },
          position: 'relative',
          overflow: 'hidden',
          // borderRadius: 2,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {carouselItems.map((item, index) => (
          <Fade
            key={index}
            in={currentImageIndex === index}
            timeout={{ enter: 1000, exit: 1000 }}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: currentImageIndex === index ? 1 : 0,
                transition: 'opacity 1s ease-in-out',
                backgroundImage: `url(${item.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Fade>
        ))}
      </Box>

      {/* Navigation Dots */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, gap: 1 }}>
        {carouselItems.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              p: 0.5,
              color: currentImageIndex === index ? 'primary.main' : 'grey.400',
              '&:hover': { color: 'primary.dark' },
            }}
            aria-label={`Go to image ${index + 1}`}
          >
            <CircleIcon sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }} />
          </IconButton>
        ))}
      </Box> */}

      {/* Dynamic Caption */}
      {/* <Typography
        variant="h6"
        sx={{
          color: '#333',
          fontSize: { xs: '1rem', md: '1.25rem' },
          fontWeight: 500,
        }}
      >
        {carouselItems[currentImageIndex].caption}
      </Typography> */}
    </Box>
  );
};

export default ShowroomSection;