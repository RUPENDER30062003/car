import { useReducer, useCallback, useMemo, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Modal,
  Button,
  Grid,
  ButtonBase,
  LinearProgress,
  ThemeProvider,
  createTheme,
  Fade,
  Slide,
  Chip,
  FormHelperText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CarImage from "./car4.jpg";
import CarImage1 from "./car1.jpg";
import CarImage2 from "./car2.jpg";
import CarImage3 from "./car3.jpg";
import CarImage4 from "./car4.jpg";
import CarImage5 from "./car5.jpg";
import CarImage6 from "./car6.jpg";

const darkTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff9800" },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",
    h5: { fontWeight: 700, fontSize: { xs: "1.2rem", sm: "1.5rem" } },
    h6: { fontWeight: 600, fontSize: { xs: "1rem", sm: "1.25rem" } },
    body2: { fontSize: { xs: "0.75rem", sm: "0.85rem" } },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          transition: "transform 0.2s, background-color 0.2s",
          "&:hover": { transform: "scale(1.05)" },
          "&:active": { transform: "scale(0.95)" },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          transition: "all 0.2s",
          "&:hover": { transform: "scale(1.1)" },
        },
      },
    },
  },
});

const luxuryCarData = {
  "Mercedes-Benz": {
    models: [
      "A-Class",
      "C-Class",
      "E-Class",
      "S-Class",
      "GLA",
      "GLC",
      "GLE",
      "GLS",
      "AMG GT",
      "Maybach S-Class",
    ],
    variants: {
      "A-Class": ["A200 Petrol", "A200d Diesel", "AMG A35 Petrol"],
      "C-Class": [
        "C200 Petrol",
        "C220d Diesel",
        "C300 Petrol",
        "AMG C43 Petrol",
      ],
      "E-Class": [
        "E200 Petrol",
        "E220d Diesel",
        "E350 Petrol",
        "AMG E53 Petrol",
      ],
      "S-Class": [
        "S350 Petrol",
        "S350d Diesel",
        "S500 Petrol",
        "AMG S63 Petrol",
      ],
      GLA: ["GLA200 Petrol", "GLA200d Diesel", "AMG GLA35 Petrol"],
      GLC: [
        "GLC200 Petrol",
        "GLC220d Diesel",
        "GLC300 Petrol",
        "AMG GLC43 Petrol",
      ],
      GLE: [
        "GLE300 Petrol",
        "GLE300d Diesel",
        "GLE450 Petrol",
        "AMG GLE53 Petrol",
      ],
      GLS: [
        "GLS400 Petrol",
        "GLS400d Diesel",
        "GLS580 Petrol",
        "AMG GLS63 Petrol",
      ],
      "AMG GT": ["AMG GT 53 Petrol", "AMG GT 63 Petrol"],
      "Maybach S-Class": ["S580 Petrol", "S680 Petrol"],
    },
  },
  BMW: {
    models: [
      "1 Series",
      "2 Series",
      "3 Series",
      "5 Series",
      "7 Series",
      "X1",
      "X3",
      "X5",
      "X7",
      "Z4",
      "i7",
    ],
    variants: {
      "1 Series": [
        "118i Petrol",
        "118d Diesel",
        "120i Petrol",
        "120d Diesel",
        "M135i Petrol",
      ],
      "2 Series": ["220i Petrol", "220d Diesel", "M240i Petrol"],
      "3 Series": [
        "320i Petrol",
        "320d Diesel",
        "330i Petrol",
        "330d Diesel",
        "M340i Petrol",
      ],
      "5 Series": [
        "520i Petrol",
        "520d Diesel",
        "530i Petrol",
        "530d Diesel",
        "M550i Petrol",
      ],
      "7 Series": [
        "740i Petrol",
        "730d Diesel",
        "750i Petrol",
        "740d Diesel",
        "M760i Petrol",
      ],
      X1: [
        "sDrive18i Petrol",
        "sDrive20d Diesel",
        "xDrive20i Petrol",
        "xDrive20d Diesel",
        "M35i Petrol",
      ],
      X3: [
        "xDrive20i Petrol",
        "xDrive20d Diesel",
        "xDrive30i Petrol",
        "xDrive30d Diesel",
        "M40i Petrol",
      ],
      X5: [
        "xDrive30i Petrol",
        "xDrive30d Diesel",
        "xDrive40i Petrol",
        "xDrive40d Diesel",
        "M50i Petrol",
      ],
      X7: [
        "xDrive30i Petrol",
        "xDrive30d Diesel",
        "xDrive40i Petrol",
        "xDrive40d Diesel",
        "M50i Petrol",
      ],
      Z4: ["sDrive20i Petrol", "M40i Petrol"],
      i7: ["xDrive60 Electric", "M70 xDrive Electric"],
    },
  },
  Audi: {
    models: [
      "A3",
      "A4",
      "A6",
      "A8",
      "Q3",
      "Q5",
      "Q7",
      "Q8",
      "TT",
      "R8",
      "RS Q8",
    ],
    variants: {
      A3: [
        "35 TFSI Petrol",
        "35 TDI Diesel",
        "40 TFSI Petrol",
        "40 TDI Diesel",
        "S3 Petrol",
      ],
      A4: [
        "35 TFSI Petrol",
        "35 TDI Diesel",
        "40 TFSI Petrol",
        "40 TDI Diesel",
        "S4 Petrol",
      ],
      A6: [
        "40 TFSI Petrol",
        "40 TDI Diesel",
        "45 TFSI Petrol",
        "45 TDI Diesel",
        "S6 Petrol",
      ],
      A8: [
        "50 TFSI Petrol",
        "50 TDI Diesel",
        "60 TFSI Petrol",
        "60 TDI Diesel",
        "S8 Petrol",
      ],
      Q3: [
        "35 TFSI Petrol",
        "35 TDI Diesel",
        "40 TFSI Petrol",
        "40 TDI Diesel",
        "RS Q3 Petrol",
      ],
      Q5: [
        "40 TFSI Petrol",
        "40 TDI Diesel",
        "45 TFSI Petrol",
        "45 TDI Diesel",
        "SQ5 Petrol",
      ],
      Q7: [
        "45 TFSI Petrol",
        "45 TDI Diesel",
        "50 TFSI Petrol",
        "50 TDI Diesel",
        "SQ7 Petrol",
      ],
      Q8: [
        "45 TFSI Petrol",
        "45 TDI Diesel",
        "50 TFSI Petrol",
        "50 TDI Diesel",
        "SQ8 Petrol",
      ],
      TT: ["40 TFSI Petrol", "45 TFSI Petrol"],
      R8: ["V10 Petrol", "V10 Plus Petrol"],
      "RS Q8": ["RS Q8 Performance Petrol"],
    },
  },
  Jaguar: {
    models: ["XE", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace", "F-Type"],
    variants: {
      XE: [
        "P200 Petrol",
        "D180 Diesel",
        "P250 Petrol",
        "D200 Diesel",
        "S Petrol",
      ],
      XF: [
        "P250 Petrol",
        "D200 Diesel",
        "P300 Petrol",
        "D250 Diesel",
        "S Petrol",
      ],
      XJ: [
        "P300 Petrol",
        "D200 Diesel",
        "P400 Petrol",
        "D300 Diesel",
        "Supercharged Petrol",
      ],
      "F-Pace": [
        "P250 Petrol",
        "D200 Diesel",
        "P400 Petrol",
        "D250 Diesel",
        "SVR Petrol",
      ],
      "E-Pace": [
        "P200 Petrol",
        "D180 Diesel",
        "P250 Petrol",
        "D200 Diesel",
        "R-Dynamic Petrol",
      ],
      "I-Pace": ["EV400 Electric", "HSE Electric"],
      "F-Type": ["P300 Petrol", "P450 Petrol", "R Petrol"],
    },
  },
  "Land Rover": {
    models: [
      "Discovery",
      "Discovery Sport",
      "Range Rover Evoque",
      "Range Rover Velar",
      "Range Rover",
      "Range Rover Sport",
      "Defender",
    ],
    variants: {
      Discovery: [
        "P300 Petrol",
        "D250 Diesel",
        "P360 Petrol",
        "D300 Diesel",
        "HSE Petrol",
      ],
      "Discovery Sport": [
        "P200 Petrol",
        "D180 Diesel",
        "P250 Petrol",
        "D200 Diesel",
        "HSE Petrol",
      ],
      "Range Rover Evoque": [
        "P200 Petrol",
        "D180 Diesel",
        "P250 Petrol",
        "D200 Diesel",
        "R-Dynamic Petrol",
      ],
      "Range Rover Velar": [
        "P250 Petrol",
        "D200 Diesel",
        "P400 Petrol",
        "D250 Diesel",
        "SVR Petrol",
      ],
      "Range Rover": [
        "P400 Petrol",
        "D300 Diesel",
        "P530 Petrol",
        "D350 Diesel",
        "SVR Petrol",
      ],
      "Range Rover Sport": [
        "P360 Petrol",
        "D250 Diesel",
        "P400 Petrol",
        "D300 Diesel",
        "SVR Petrol",
      ],
      Defender: [
        "P300 Petrol",
        "D200 Diesel",
        "P400 Petrol",
        "D250 Diesel",
        "V8 Petrol",
      ],
    },
  },
  Porsche: {
    models: [
      "911",
      "Cayenne",
      "Macan",
      "Panamera",
      "Taycan",
      "718 Boxster",
      "718 Cayman",
    ],
    variants: {
      911: ["Carrera Petrol", "Carrera S Petrol", "Turbo S Petrol"],
      Cayenne: ["Base Petrol", "S Petrol", "Turbo Petrol", "GTS Petrol"],
      Macan: ["Base Petrol", "S Petrol", "GTS Petrol", "Turbo Petrol"],
      Panamera: ["4 Petrol", "4S Petrol", "Turbo Petrol", "GTS Petrol"],
      Taycan: ["4S Electric", "Turbo Electric", "Turbo S Electric"],
      "718 Boxster": ["Base Petrol", "S Petrol", "GTS Petrol"],
      "718 Cayman": ["Base Petrol", "S Petrol", "GTS Petrol"],
    },
  },
  Lexus: {
    models: ["ES", "LS", "NX", "RX", "LX", "LC", "IS"],
    variants: {
      ES: ["ES300h Hybrid", "ES350 Petrol"],
      LS: ["LS500 Petrol", "LS500h Hybrid"],
      NX: ["NX300h Hybrid", "NX350 Petrol"],
      RX: ["RX350 Petrol", "RX450h Hybrid"],
      LX: ["LX570 Petrol", "LX600 Petrol"],
      LC: ["LC500 Petrol", "LC500h Hybrid"],
      IS: ["IS300 Petrol", "IS350 Petrol"],
    },
  },
  Volvo: {
    models: ["S60", "S90", "XC40", "XC60", "XC90", "V60", "V90"],
    variants: {
      S60: ["T4 Petrol", "D4 Diesel", "T8 Hybrid", "Polestar Hybrid"],
      S90: ["T5 Petrol", "D4 Diesel", "T8 Hybrid"],
      XC40: ["T4 Petrol", "D3 Diesel", "T5 Petrol", "Recharge Electric"],
      XC60: ["T5 Petrol", "D4 Diesel", "T8 Hybrid"],
      XC90: ["T6 Petrol", "D5 Diesel", "T8 Hybrid"],
      V60: ["T4 Petrol", "D4 Diesel", "T8 Hybrid"],
      V90: ["T5 Petrol", "D4 Diesel", "T8 Hybrid"],
    },
  },
  Maserati: {
    models: ["Ghibli", "Quattroporte", "Levante", "MC20", "GranTurismo"],
    variants: {
      Ghibli: ["V6 Petrol", "Diesel V6", "S Q4 Petrol", "Trofeo Petrol"],
      Quattroporte: ["V6 Petrol", "Diesel V6", "S Q4 Petrol", "GTS Petrol"],
      Levante: ["V6 Petrol", "Diesel V6", "S Petrol", "Trofeo Petrol"],
      MC20: ["V6 Petrol", "Cielo Petrol"],
      GranTurismo: ["Modena Petrol", "Trofeo Petrol"],
    },
  },
  Bentley: {
    models: ["Continental GT", "Flying Spur", "Bentayga", "Mulsanne"],
    variants: {
      "Continental GT": ["V8 Petrol", "W12 Petrol", "Speed Petrol"],
      "Flying Spur": ["V8 Petrol", "W12 Petrol", "Hybrid"],
      Bentayga: ["V8 Petrol", "W12 Petrol", "Speed Petrol", "Hybrid"],
      Mulsanne: [
        "Standard Petrol",
        "Speed Petrol",
        "Extended Wheelbase Petrol",
      ],
    },
  },
};

const popularCities = [
  "Delhi",
  "Bangalore",
  "Mumbai",
  "Pune",
  "Hyderabad",
  "Gurgaon",
  "Noida",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Lucknow",
  "Jaipur",
  "Indore",
  "Agra",
  "Ahmednagar",
  "Aligarh",
  "Allahabad",
  "Amravati",
  "Anand",
  "Asansol",
  "Aurangabad",
  "Ayodhya",
  "Belgaum",
  "Bharuch",
  "Bhavnagar",
  "Bhopal",
  "Chandigarh",
  "Coimbatore",
  "Davanagere",
  "Delhi NCR",
  "Dharwad",
  "Erode",
  "Faridabad",
  "Faridkot",
  "Ghaziabad",
  "Gorakhpur",
  "Guntur",
  "Hassan",
  "Hisar",
  "Hoshiarpur",
  "Hubli",
  "Jalandhar",
  "Jamnagar",
  "Jodhpur",
  "Kanpur",
  "Karnal",
  "Kochi",
  "Kolhapur",
  "Kollam",
  "Kota",
  "Kottayam",
  "Kozhikode",
  "Ludhiana",
  "Madurai",
  "Mangalore",
  "Mathura",
  "Meerut",
  "Mehsana",
  "Mysore",
  "Nagpur",
  "Namakkal",
  "Nashik",
  "Palanpur",
  "Panipat",
  "Patiala",
  "Rajkot",
  "Rewari",
  "Rohtak",
  "Salem",
  "Sangli",
  "Satara",
  "Shimoga",
  "Siliguri",
  "Solapur",
  "Sonipat",
  "Surat",
  "Thrissur",
  "Tiruppur",
  "Trichy",
  "Trivandrum",
  "Tumkur",
  "Udaipur",
  "Udupi",
  "Vadodara",
  "Varanasi",
  "Vellore",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",
];

const kilometersOptions = [
  "0 Km - 10,000 Km",
  "10,000 Km - 20,000 Km",
  "20,000 Km - 30,000 Km",
  "30,000 Km - 40,000 Km",
  "40,000 Km - 50,000 Km",
  "50,000 Km - 60,000 Km",
  "60,000 Km - 70,000 Km",
  "70,000 Km - 80,000 Km",
  "80,000 Km - 90,000 Km",
  "90,000 Km - 1,00,000 Km",
  "1,00,000 Km - 1,25,000 Km",
  "1,25,000 Km - 1,50,000 Km",
  "1,50,000 Km - 1,75,000 Km",
  "1,75,000 Km - 2,00,000 Km",
  "2,00,000 Km - 2,25,000 Km",
  "2,25,000 Km - 2,50,000 Km",
  "2,50,000 Km or more",
];

const timelineOptions = [
  { value: "immediately", label: "Immediately" },
  { value: "within_month", label: "Within a month" },
  { value: "after_month", label: "After a month" },
  { value: "just_checking", label: "Just checking price" },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return [...Array(currentYear - 1998).keys()]
    .map((i) => (currentYear - i).toString())
    .concat(["1999 or older"]);
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: { ...state.formData, [action.key]: action.value },
        validationErrors: {
          ...state.validationErrors,
          [action.key]: action.value ? "" : `Please select a ${action.key}`,
        },
      };
    case "UPDATE_MOBILE": {
      const mobile = String(action.value || "")
        .replace(/\D g/, "")
        .slice(0, 10);
      const mobileError = /^[6-9]\d{9}$/.test(mobile) ? "" : "";
      // : "Enter a valid 10-digit mobile number starting with 6-9";
      return {
        ...state,
        formData: { ...state.formData, mobile },
        validationErrors: { ...state.validationErrors, mobile: mobileError },
      };
    }
    case "SET_STEP":
      return { ...state, currentStep: action.step };
    case "SUBMIT":
      console.log("Form Data:", JSON.stringify(state.formData, null, 2));
      return { ...state, isSubmitted: true };
    case "RESET":
      return {
        currentStep: action.initialCity ? 2 : 1,
        formData: {
          mobile: "",
          ...(action.initialCity ? { city: action.initialCity } : {}),
        },
        isSubmitted: false,
        validationErrors: {},
      };
    default:
      return state;
  }
};

const CarValuationForm = ({ onClose, initialCity }) => {
  const [state, dispatch] = useReducer(formReducer, {
    currentStep: initialCity ? 2 : 1,
    formData: { mobile: "", ...(initialCity ? { city: initialCity } : {}) },
    isSubmitted: false,
    validationErrors: {},
  });

  const { currentStep, formData, isSubmitted, validationErrors } = state;

  const canProceed = useCallback(
    (key, value) => {
      const updatedFormData = { ...formData, [key]: value };
      switch (currentStep) {
        case 1:
          return !!updatedFormData.city;
        case 2:
          return !!updatedFormData.year;
        case 3:
          return !!updatedFormData.brand;
        case 4:
          return !!updatedFormData.model;
        case 5:
          return !!updatedFormData.transmission;
        case 6:
          return !!updatedFormData.kilometers;
        case 7:
          return !!updatedFormData.timeline;
        case 8:
          return /^[6-9]\d{9}$/.test(updatedFormData.mobile || "");
        default:
          return true;
      }
    },
    [currentStep, formData]
  );

  const handleSelect = useCallback(
    (key, value) => {
      dispatch({ type: "UPDATE_FIELD", key, value });
      if (canProceed(key, value)) {
        dispatch({ type: "SET_STEP", step: currentStep + 1 });
      }
    },
    [canProceed, currentStep]
  );

  const handleNext = useCallback(() => {
    if (currentStep < 8 && canProceed(currentStep, formData[currentStep])) {
      dispatch({ type: "SET_STEP", step: currentStep + 1 });
    } else if (currentStep === 8 && canProceed("mobile", formData.mobile)) {
      dispatch({ type: "SUBMIT" });
    }
  }, [currentStep, canProceed, formData]);

  const handlePrev = useCallback(() => {
    if (currentStep > 1) {
      dispatch({ type: "SET_STEP", step: currentStep - 1 });
    }
  }, [currentStep]);



  const handleMobileInput = useCallback(
    (e) => {
      const value = e.target.value;
      dispatch({ type: "UPDATE_MOBILE", value });
      if (canProceed("mobile", value)) {
        dispatch({ type: "SUBMIT" });
      }
    },
    [canProceed]
  );

  const variants = useMemo(
    () =>
      formData.brand && formData.model
        ? luxuryCarData[formData.brand]?.variants[formData.model] || []
        : [],
    [formData.brand, formData.model]
  );

  const renderStepContent = () => {
    if (isSubmitted) {
      return (
        
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "background.paper",
          }}
        >
          <Typography variant="h4" sx={{ color: "success.main", mb: 2 }}>
            🎉 Successfully Submitted!
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              textTransform: "none",
              borderRadius: 4,
              fontWeight: "bold",
              px: 3,
              py: 1.5,
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "success.dark",
              },
            }}
            onClick={() => {
              alert("Thank you! We’ll contact you shortly.");
            }}
          >
            View Submission Details
          </Button>
        </Box>
      );
    }

    return (
      <Slide direction="left" in={true} timeout={300}>
        <Box
          sx={{
            maxHeight: "300px", // Adjust to fit within modal
            overflowY: "auto", // Enable vertical scrolling
            px: 1, // Add padding for better appearance
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "4px",
              "&:hover": {
                background: "rgba(255, 255, 255, 0.5)",
              },
            },
          }}
        >
          {currentStep === 1 && (
            <>
              <Typography
                variant="h5"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Select City
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontWeight: "600", mb: 1 }}
                >
                  Popular Cities
                </Typography>
                <Grid container spacing={{ xs: 1 }}>
                  {popularCities.slice().map((city) => (
                    <Grid item xs={6} sm={4} key={city}>
                      <ButtonBase
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          textAlign: "center",
                          width: "100%",
                          bgcolor:
                            formData.city === city
                              ? "primary.main"
                              : "background.paper",
                          color:
                            formData.city === city ? "white" : "text.primary",
                          borderRadius: 2,
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          minHeight: 40,
                        }}
                        onClick={() => handleSelect("city", city)}
                        aria-label={`Select ${city}`}
                      >
                        <Typography variant="body2">{city}</Typography>
                      </ButtonBase>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}
          {currentStep === 2 && (
            <>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Select Manufacturing Year
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {generateYears()
                  .slice()
                  .map((year) => (
                    <Grid item xs={6} sm={4} key={year}>
                      <ButtonBase
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          textAlign: "center",
                          width: "100%",
                          bgcolor:
                            formData.year === year
                              ? "primary.main"
                              : "background.paper",
                          color:
                            formData.year === year ? "white" : "text.primary",
                          borderRadius: 2,
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          minHeight: 40,
                        }}
                        onClick={() => handleSelect("year", year)}
                        aria-label={`Select year ${year}`}
                      >
                        <Typography variant="body2">{year}</Typography>
                      </ButtonBase>
                    </Grid>
                  ))}
              </Grid>
            </>
          )}
          {currentStep === 3 && (
            <>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Select Car Brand
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {Object.keys(luxuryCarData)
                  .slice()
                  .map((brand) => (
                    <Grid item xs={6} sm={4} key={brand}>
                      <ButtonBase
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          textAlign: "center",
                          width: "100%",
                          bgcolor:
                            formData.brand === brand
                              ? "primary.main"
                              : "background.paper",
                          color:
                            formData.brand === brand ? "white" : "text.primary",
                          borderRadius: 2,
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          minHeight: 40,
                        }}
                        onClick={() => handleSelect("brand", brand)}
                        aria-label={`Select ${brand}`}
                      >
                        <Typography variant="body2">{brand}</Typography>
                      </ButtonBase>
                    </Grid>
                  ))}
              </Grid>
            </>
          )}
          {currentStep === 4 && (
            <>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Select Car Model
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {(formData.brand ? luxuryCarData[formData.brand].models : [])
                  .slice()
                  .map((model) => (
                    <Grid item xs={6} sm={4} key={model}>
                      <ButtonBase
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          textAlign: "center",
                          width: "100%",
                          bgcolor:
                            formData.model === model
                              ? "primary.main"
                              : "background.paper",
                          color:
                            formData.model === model ? "white" : "text.primary",
                          borderRadius: 2,
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          minHeight: 40,
                        }}
                        onClick={() => handleSelect("model", model)}
                        aria-label={`Select ${model}`}
                      >
                        <Typography variant="body2">{model}</Typography>
                      </ButtonBase>
                    </Grid>
                  ))}
              </Grid>
            </>
          )}
          {currentStep === 5 && (
            <>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Select Variant
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {variants.slice().map((variant) => (
                  <Grid item xs={6} sm={6} key={variant}>
                    <ButtonBase
                      sx={{
                        p: { xs: 1, sm: 1.5 },
                        textAlign: "center",
                        width: "100%",
                        bgcolor:
                          formData.transmission === variant
                            ? "primary.main"
                            : "background.paper",
                        color:
                          formData.transmission === variant
                            ? "white"
                            : "text.primary",
                        borderRadius: 2,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        minHeight: 40,
                      }}
                      onClick={() => handleSelect("transmission", variant)}
                      aria-label={`Select ${variant}`}
                    >
                      <Typography variant="body2">{variant}</Typography>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {currentStep === 6 && (
            <>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Select Kilometers Driven
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                {kilometersOptions.slice().map((option) => (
                  <Grid item xs={6} sm={4} key={option}>
                    <ButtonBase
                      sx={{
                        p: { xs: 1, sm: 1.5 },
                        textAlign: "center",
                        width: "100%",
                        bgcolor:
                          formData.kilometers === option
                            ? "primary.main"
                            : "background.paper",
                        color:
                          formData.kilometers === option
                            ? "white"
                            : "text.primary",
                        borderRadius: 2,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        minHeight: 40,
                      }}
                      onClick={() => handleSelect("kilometers", option)}
                      aria-label={`Select ${option}`}
                    >
                      <Typography variant="body2">{option}</Typography>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {currentStep === 7 && (
            <>
              <Typography
                variant="h6"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                When do you want to sell?
              </Typography>
              <Grid container spacing={{ xs: 1, sm: 2 }}>
                {timelineOptions.map((option) => (
                  <Grid item xs={6} sm={4} key={option.value}>
                    <ButtonBase
                      sx={{
                        p: { xs: 1, sm: 1.5 },
                        textAlign: "center",
                        width: "100%",
                        bgcolor:
                          formData.timeline === option.value
                            ? "primary.main"
                            : "background.paper",
                        color:
                          formData.timeline === option.value
                            ? "white"
                            : "text.primary",
                        borderRadius: 2,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        minHeight: 40,
                      }}
                      onClick={() => handleSelect("timeline", option.value)}
                      aria-label={`Select ${option.label}`}
                    >
                      <Typography variant="body2">{option.label}</Typography>
                    </ButtonBase>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
          {currentStep === 8 && (
            <>
              <Typography
                variant="h5"
                color="white"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Enter Mobile Number
              </Typography>
              <TextField
                fullWidth
                label="Mobile Number"
                variant="outlined"
                value={formData.mobile || ""}
                onChange={handleMobileInput}
                error={!!validationErrors.mobile}
                helperText={validationErrors.mobile}
                placeholder="Enter 10-digit mobile"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <span style={{ color: "white" }}>+91</span>
                    </InputAdornment>
                  ),
                }}
                inputProps={{ maxLength: 10, type: "tel" }}
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "transparent",
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    "::placeholder": {
                      color: "white",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormHelperText-root": {
                    color: "white",
                  },
                }}
                aria-label="Enter your mobile number"
              />
            </>
          )}
        </Box>
      </Slide>
    );
  };

  return (
    <Box
      sx={{
        p: { xs: 1.5, sm: 2 },
        maxWidth: 500,
        maxHeight: 500,
        mx: "auto",
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1,
        },
        "& > *": {
          position: "relative",
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1.5,
          bgcolor: "linear-gradient(45deg, #1976d2, #42a5f5)",
        }}
      >
        <Typography variant="h5" color="white">
          Luxury Car Valuation
        </Typography>
        <IconButton onClick={onClose} aria-label="Close form">
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      <LinearProgress
        variant="determinate"
        value={(currentStep / 8) * 100}
        sx={{
          mb: 1.5,
          height: 3,
          borderRadius: 4,
          backgroundColor: "rgba(114, 246, 114, 0.48)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "rgba(1, 175, 1, 0.3)",
          },
        }}
      />

      <Typography
        variant="body2"
        sx={{ textAlign: "center", mb: 1.5, color: "white" }}
      >
        Step {currentStep} of 8
      </Typography>
      {renderStepContent()}
      {!isSubmitted && (
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 2 }}
          >
            <Button
              variant="contained"
              onClick={handlePrev}
              disabled={currentStep === 1}
              sx={{
                minWidth: 90,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                backgroundColor: "#1976d2",
                color: "#ffffff",
                borderColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                  borderColor: "#1565c0",
                  color: "#ffffff",
                },
                "&.Mui-disabled": {
                  backgroundColor: "rgba(25, 118, 210, 0.3)",
                  color: "rgba(255, 255, 255, 0.5)",
                  borderColor: "rgba(25, 118, 210, 0.3)",
                },
              }}
              aria-label="Go to previous step"
            >
              Previous
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                minWidth: 90,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                backgroundColor: "#00ff00",
                color: "#ffffff",
                borderColor: "#00ff00",
                "&:hover": {
                  backgroundColor: "#00cc00",
                  borderColor: "#00cc00",
                  color: "#ffffff",
                },
                "&.Mui-disabled": {
                  backgroundColor: "rgba(0, 255, 0, 0.3)",
                  color: "rgba(255, 255, 255, 0.5)",
                  borderColor: "rgba(0, 255, 0, 0.3)",
                },
              }}
              aria-label={currentStep === 8 ? "Submit form" : "Go to next step"}
            >
              {currentStep === 8 ? "Submit" : "Next"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const HeroSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [initialCity, setInitialCity] = useState("");

  const handleOpenModal = useCallback((city = "") => {
    setInitialCity(city);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setInitialCity("");
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", sm: "100vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        px: { xs: 2, sm: 3 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-10px",
          left: "-10px",
          right: "-10px",
          bottom: "-10px",
          backgroundImage: `url(${CarImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(0.4px)",
          zIndex: -2,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          zIndex: -1,
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          mb: 1,
          textTransform: "uppercase",
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        Sell Your Car in Minutes, Not Months
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1rem", sm: "3rem", md: "3rem" },
          mb: 2.5,
          textTransform: "uppercase",
          textShadow: "0 2px 8px rgba(0,0,0,0.5)",
        }}
      >
        Instant Car Cash
      </Typography>
      <TextField
        placeholder="Search for your next vehicle..."
        variant="outlined"
        onClick={() => handleOpenModal("")}
        onChange={() => handleOpenModal("")}
        sx={{
          bgcolor: "white",
          borderRadius: "8px",
          width: { xs: "90%", sm: "70%", md: "500px" },
          "& .MuiOutlinedInput-root": {
            height: { xs: "38px", sm: "42px" },
            fontSize: { xs: "0.85rem", sm: "0.95rem" },
            "& fieldset": { borderColor: "transparent" },
            "&:hover": { borderColor: "white" },
            "&.Mui-focused fieldset": { borderColor: "transparent" },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => handleOpenModal("")}
                aria-label="Open valuation form"
              >
                <SearchIcon sx={{ fontSize: { xs: "1.3rem", sm: "1.5rem" } }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
        aria-label="Search for your vehicle"
      />
      <Box
        sx={{
          display: "flex",
          gap: { xs: 0.8, sm: 1.2 },
          mt: 1.5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        {["Delhi", "Gurgaon", "Noida"].map((city) => (
          <Chip
            key={city}
            label={city}
            onClick={() => handleOpenModal(city)}
            variant="outlined"
            sx={{
              height: { xs: 26, sm: 28 },
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
              minWidth: 60,
              color: "white",
              borderColor: "white",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
                borderColor: "primary.main",
              },
              "&:focus": {
                bgcolor: "primary.main",
                color: "white",
                borderColor: "primary.main",
              },
            }}
            aria-label={`Select ${city} for valuation`}
          />
        ))}
      </Box>
      <ThemeProvider theme={darkTheme}>
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
          aria-labelledby="car-valuation-modal"
          aria-describedby="Form to get your luxury car valuation"
        >
          <Fade in={openModal}>
            <Box
              sx={{
                bgcolor: "background.paper",
                width: { xs: "90%", sm: 450, md: 500 },
                maxHeight: "600px",
                alignItems: "center",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center",
              }}
            >
              <CarValuationForm
                onClose={handleCloseModal}
                initialCity={initialCity}
              />
            </Box>
          </Fade>
        </Modal>
      </ThemeProvider>
    </Box>
  );
};

export default HeroSection;
