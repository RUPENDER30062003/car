// import { Box, Typography, Grid } from '@mui/material';

// // Import JPG images
// import AudiLogo from './audi.jpg';
// import BMWLogo from './bmw.jpg';
// import JaguarLogo from './jaguar.jpg';
// import JeepLogo from './jeep.jpg';
// import LandRoverLogo from './land.jpg';
// import MercedesLogo from './mercedes.jpg';
// import PorscheLogo from './porsche.jpg';
// import VolkswagenLogo from './volkswagen.jpg';
// import VolvoLogo from './volvo.jpg';

// const brands = [
//   { name: 'Audi', logo: AudiLogo },
//   { name: 'BMW', logo: BMWLogo },
//   { name: 'Jaguar', logo: JaguarLogo },
//   { name: 'Jeep', logo: JeepLogo },
//   { name: 'Land Rover', logo: LandRoverLogo },
//   { name: 'Mercedes-Benz', logo: MercedesLogo },
//   { name: 'Porsche', logo: PorscheLogo },
//   { name: 'Volkswagen', logo: VolkswagenLogo },
//   { name: 'Volvo', logo: VolvoLogo },
// ];

// const BrandSelector = () => {
//   return (
//     <Box sx={{ py: { xs: 4, md: 6 }, textAlign: 'center' }}>
//       <Typography
//         variant="h6"
//         sx={{
//           fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
//           fontWeight: 400,
//           mb: 4,
//         }}
//       >
//         <strong>Select</strong> a Brand
//       </Typography>

//       <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
//         {brands.map(({ name, logo }, index) => (
//           <Grid
//             item
//             key={index}
//             xs={4}
//             sm={3}
//             md={2}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               textAlign: 'center',
//             }}
//           >
//             <Box
//               component="img"
//               src={logo}
//               alt={`${name} logo`}
//               sx={{
//                 width: { xs: 40, sm: 50, md: 60 },
//                 height: { xs: 40, sm: 50, md: 60 },
//                 mb: 1,
//                 mx: 3,
//                 objectFit: 'contain',
//                 borderRadius: 1,
//                 opacity: 1,
//               }}
//             />
//             <Typography
//               variant="caption"
//               sx={{
//                 fontSize: { xs: '0.55rem', sm: '0.7rem', md: '0.75rem' },
//                 color: '#666',
//               }}
//             >
//               {name}
//             </Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default BrandSelector;






// import { useEffect, memo, useMemo } from 'react';
// import { Box, Typography, Grid } from '@mui/material';

// // Import JPG images
// import AudiLogo from './audi.jpg';
// import BMWLogo from './bmw.jpg';
// import JaguarLogo from './jaguar.jpg';
// import JeepLogo from './jeep.jpg';
// import LandRoverLogo from './land.jpg';
// import MercedesLogo from './mercedes.jpg';
// import PorscheLogo from './porsche.jpg';
// import VolkswagenLogo from './volkswagen.jpg';
// import VolvoLogo from './volvo.jpg';

// // Define brands array with useMemo to prevent re-creation on each render
// const BrandSelector = () => {
//   const brands = useMemo(
//     () => [
//       { name: 'Audi', logo: AudiLogo },
//       { name: 'BMW', logo: BMWLogo },
//       { name: 'Jaguar', logo: JaguarLogo },
//       { name: 'Jeep', logo: JeepLogo },
//       { name: 'Land Rover', logo: LandRoverLogo },
//       { name: 'Mercedes-Benz', logo: MercedesLogo },
//       { name: 'Porsche', logo: PorscheLogo },
//       { name: 'Volkswagen', logo: VolkswagenLogo },
//       { name: 'Volvo', logo: VolvoLogo },
//     ],
//     []
//   );

//   // Preload images on component mount
//   useEffect(() => {
//     const preloadImages = brands.map(({ logo }) => {
//       const img = new Image();
//       img.src = logo;
//       img.loading = 'eager'; // Prioritize loading for visible images
//       img.onerror = () => console.error(`Failed to preload image: ${logo}`);
//       return img;
//     });

//     return () => {
//       // Cleanup (optional, browser caches images)
//       preloadImages.forEach((img) => (img.src = ''));
//     };
//   }, [brands]);

//   return (
//     <Box sx={{ py: { xs: 4, md: 6 }, textAlign: 'center' }}>
//       <Typography
//         variant="h6"
//         sx={{
//           fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
//           fontWeight: 400,
//           mb: 4,
//         }}
//       >
//         <strong>Select</strong> a Brand
//       </Typography>

//       <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
//         {brands.map(({ name, logo }, index) => (
//           <Grid
//             item
//             key={name} // Use unique name instead of index for better performance
//             xs={4}
//             sm={3}
//             md={2}
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               justifyContent: 'center',
//               textAlign: 'center',
//             }}
//           >
//             <Box
//               component="img"
//               src={logo}
//               alt={`${name} logo`}
//               loading="lazy" // Defer loading for off-screen images
//               sx={{
//                 width: { xs: 40, sm: 50, md: 60 },
//                 height: { xs: 40, sm: 50, md: 60 },
//                 mb: 1,
//                 mx: 3,
//                 objectFit: 'contain',
//                 borderRadius: 1,
//                 opacity: 1,
//                 backgroundColor: '#f0f0f0', // Placeholder background while loading
//                 transition: 'opacity 0.3s ease-in-out',
//                 '&:not([src])': {
//                   opacity: 0.5, // Fallback opacity while loading
//                 },
//               }}
//             />
//             <Typography
//               variant="caption"
//               sx={{
//                 fontSize: { xs: '0.55rem', sm: '0.7rem', md: '0.75rem' },
//                 color: '#666',
//               }}
//             >
//               {name}
//             </Typography>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// // Memoize the component to prevent unnecessary re-renders
// export default memo(BrandSelector);





import { useEffect, memo, useMemo } from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Import JPG images
import AudiLogo from './audi.jpg';
import BMWLogo from './bmw.jpg';
import JaguarLogo from './jaguar.jpg';
import JeepLogo from './jeep.jpg';
import LandRoverLogo from './land.jpg';
import MercedesLogo from './mercedes.jpg';
import PorscheLogo from './porsche.jpg';
import VolkswagenLogo from './volkswagen.jpg';
import VolvoLogo from './volvo.jpg';

// Define brands array with useMemo to prevent re-creation on each render
const BrandSelector = () => {
  const brands = useMemo(
    () => [
      { name: 'Audi', logo: AudiLogo },
      { name: 'BMW', logo: BMWLogo },
      { name: 'Jaguar', logo: JaguarLogo },
      { name: 'Jeep', logo: JeepLogo },
      { name: 'Land Rover', logo: LandRoverLogo },
      { name: 'Mercedes-Benz', logo: MercedesLogo },
      { name: 'Porsche', logo: PorscheLogo },
      { name: 'Volkswagen', logo: VolkswagenLogo },
      { name: 'Volvo', logo: VolvoLogo },
    ],
    []
  );

  // Preload images on component mount
  useEffect(() => {
    const preloadImages = brands.map(({ logo }) => {
      const img = new Image();
      img.src = logo;
      img.loading = 'eager';
      img.onerror = () => console.error(`Failed to preload image: ${logo}`);
      return img;
    });

    return () => {
      preloadImages.forEach((img) => (img.src = ''));
    };
  }, [brands]);

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          fontWeight: 400,
          mb: 4,
        }}
      >
        <strong>Select</strong> a Brand
      </Typography>

      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
        {brands.map(({ name, logo }) => (
          <Grid
            item
            key={name}
            xs={4}
            sm={3}
            md={2}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Box
              component="img"
              src={logo}
              alt={`${name} logo`}
              loading="lazy"
              sx={{
                width: { xs: 40, sm: 50, md: 60 },
                height: { xs: 40, sm: 50, md: 60 },
                mb: 1,
                mx: 3,
                objectFit: 'contain',
                borderRadius: 1,
                opacity: 1,
                // backgroundColor: '#f0f0f0',
                transition: 'opacity 0.3s ease-in-out',
                '&:not([src])': {
                  opacity: 0.5,
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                fontSize: { xs: '0.55rem', sm: '0.7rem', md: '0.75rem' },
                color: '#666',
              }}
            >
              {name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default memo(BrandSelector);