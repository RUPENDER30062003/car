import { Box, Typography, Button, Link } from '@mui/material';

const AboutSection = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        py: { xs: 3, md: 6 },
        px: { xs: 2, md: 6 },
        textAlign: 'center',
      }}
    >
      {/* Main Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 400,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.75rem' },
          lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 },
          mb: { xs: 2, md: 3 },
        }}
      >
        Mercedes-Benz India is a collection of leading new and used car dealerships in NCR,
        <br />
        whilst also being one of the country’s top franchised luxury dealers.
      </Typography>

      {/* Subtext with Links */}
      <Typography
        variant="body2"
        sx={{
          color: '#888',
          maxWidth: '900px',
          mx: 'auto',
          fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
          lineHeight: 1.7,
          mb: { xs: 3, md: 4 },
        }}
      >
        Mercedes-Benz represents leading automotive brands offering{' '}
        <Link href="#" underline="hover">New</Link>,{' '}
        <Link href="#" underline="hover">Used</Link>,{' '}
        <Link href="#" underline="hover">Approved Used</Link>,{' '}
        <Link href="#" underline="hover">Electric/Hybrid</Link> range,{' '}
        <Link href="#" underline="hover">Leasing</Link>,{' '}
        <Link href="#" underline="hover">Motability</Link>,{' '}
        <Link href="#" underline="hover">Repair Centre</Link>, and full manufacturer-approved{' '}
        <Link href="#" underline="hover">servicing and aftersales</Link>.
      </Typography>

      {/* Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="outlined"
          sx={{
            borderColor: '#000',
            color: '#000',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
            fontWeight: 600,
            px: { xs: 2, sm: 4 },
            py: { xs: 1, sm: 1.2 },
            width: { xs: '100%', sm: 'auto' },
            '&:hover': {
              bgcolor: '#f0f0f0',
              borderColor: '#000',
            },
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Learn</span> More About Us
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: '#000',
            color: '#000',
            fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
            fontWeight: 600,
            px: { xs: 2, sm: 4 },
            py: { xs: 1, sm: 1.2 },
            width: { xs: '100%', sm: 'auto' },
            '&:hover': {
              bgcolor: '#f0f0f0',
              borderColor: '#000',
            },
          }}
        >
          <span style={{ fontWeight: 'bold' }}>Browse</span> All Stock
        </Button>
      </Box>
    </Box>
  );
};

export default AboutSection;
