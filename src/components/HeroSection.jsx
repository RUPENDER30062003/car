// import React from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import CarImage from './Car.png'; // Adjust the path to match your file structure

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// const HeroSection = () => {
//   return (
// <Box
//   sx={{
//     position: 'relative',
//     height: { xs: '60vh', md: '80vh' },
//     backgroundImage: `url(${CarImage})`, // Use the imported image
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     color: 'white',
//     px: 2,
//   }}
// >

//       {/* Heading */}
//       <Typography
//         variant="h4"
//         sx={{
//           fontWeight: 'bold',
//           fontSize: { xs: '1.5rem', md: '2.5rem' },
//           mb: 2,
//           textTransform: 'uppercase',
//         }}
//       >
//         Welcome to
//       </Typography>
//       <Typography
//         variant="h3"
//         sx={{
//           fontWeight: 'bold',
//           fontSize: { xs: '2rem', md: '4rem' },
//           mb: 4,
//           textTransform: 'uppercase',
//         }}
//       >
//         Mercedes-Benz
//       </Typography>

//       {/* Responsive Search Bar */}
//       <TextField
//         placeholder="Search for your next vehicle..."
//         variant="outlined"
//         sx={{
//           bgcolor: 'white',
//           borderRadius: 1,
//           width: { xs: '90%', sm: '75%', md: '60%' },
//           mb: 2,
//           '& .MuiOutlinedInput-root': {
//             height: { xs: '40px', md: '50px' },
//             fontSize: { xs: '0.9rem', md: '1rem' },
//             '& fieldset': {
//               borderColor: 'transparent',
//             },
//             '&:hover fieldset': {
//               borderColor: 'transparent',
//             },
//             '&.Mui-focused fieldset': {
//               borderColor: 'transparent',
//             },
//             paddingRight: { xs: '5px', md: '10px' },
//           },
//         }}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton>
//                 <SearchIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />

//       {/* OR with Dropdown Arrow */}
//       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
//         {/* <Typography
//           variant="body1"
//           sx={{ fontSize: { xs: '0.85rem', md: '1rem' } }}
//         >
//           OR
//         </Typography>
//         <IconButton sx={{ color: 'white' }}>
//           <KeyboardArrowDownIcon
//             sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}
//           />
//         </IconButton> */}
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;












import React from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CarImage from './Car.png'; // Adjust the path to match your file structure

const HeroSection = () => {
  // Function to handle search click
  const handleSearchClick = () => {
    window.location.href = './form.html'; // Redirect to index.html in the same folder
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        backgroundImage: `url(${CarImage})`, // Use the imported image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        px: 2,
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5rem', md: '2.5rem' },
          mb: 2,
          textTransform: 'uppercase',
        }}
      >
        Welcome to
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2rem', md: '4rem' },
          mb: 4,
          textTransform: 'uppercase',
        }}
      >
        Mercedes-Benz
      </Typography>

      {/* Responsive Search Bar */}
      <TextField
        placeholder="Search for your next vehicle..."
        variant="outlined"
        onDragEnter={handleSearchClick} // Redirect to form on drag enter
        onClick={handleSearchClick} // Redirect to form on click
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
          width: { xs: '90%', sm: '75%', md: '60%' },
          mb: 2,
          '& .MuiOutlinedInput-root': {
            height: { xs: '40px', md: '50px' },
            fontSize: { xs: '0.9rem', md: '1rem' },
            '& fieldset': {
              borderColor: 'transparent',
            },
            '&:hover fieldset': {
              borderColor: 'transparent',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent',
            },
            paddingRight: { xs: '5px', md: '10px' },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearchClick}>
                <SearchIcon sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default HeroSection;
