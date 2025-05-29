import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import VerifiedIcon from '@mui/icons-material/Verified';

const reviews = [
  {
    title: 'Sales person knew the car I really wanted...',
    text: 'Sales person knew the car I really wanted, was professional and went above and beyond.',
    name: 'Ayush bansal',
    time: '58 minutes ago',
  },
  {
    title: 'Car Service',
    text: 'Aaron Graham managed my recent service. He was polite, helpful and efficient.',
    name: 'Riyaz khan',
    time: '58 minutes ago',
  },
  {
    title: 'Very quick service',
    text: 'Very quick service, courteous staff and reasonable price. Thank you.',
    name: 'Paramveer Singh',
    time: '3 hours ago',
  },
  {
    title: 'Professional and friendly',
    text: 'Professional and friendly.',
    name: 'Heena ',
    time: '3 hours ago',
  },
];

const TrustpilotSection = () => {
  return (
    <Box sx={{ py: 6, px: 0, width: '100%', mx: 'auto' }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: 500, mb: 5 }}
      >
        <strong>What</strong> Our Customers Say
      </Typography>

      <Grid container spacing={2} alignItems="stretch">
        {/* Trustpilot Summary Box */}
        <Grid sx={{ flex: 1, minWidth: '200px' }}>
          <Box
            sx={{
              textAlign: 'center',
            //   p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Excellent
            </Typography>
            <Box display="flex" justifyContent="center" mt={1} mb={1}>
              {[...Array(4)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#00b67a' }} />
              ))}
              <StarHalfIcon sx={{ color: '#00b67a' }} />
            </Box>
            <Typography variant="body2" mb={0}>
              Based on{' '}
              <Typography
                component="span"
                sx={{ textDecoration: 'underline', cursor: 'pointer' }}
              >
                16,356 reviews
              </Typography>
            </Typography>
            <Box>
              {/* <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Trustpilot_Logo_2022.svg"
                alt="Trustpilot"
                style={{ width: '100px', margin: 'auto' }}
              /> */}
            </Box>
            <Typography
              variant="caption"
              sx={{ mt: 1, display: 'block', color: '#666' }}
            >
              Showing our 4 & 5 star reviews
            </Typography>
          </Box>
        </Grid>

        {/* Reviews */}
        {reviews.map((review, idx) => (
          <Grid sx={{ flex: 1, minWidth: '200px' }} key={idx}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
                boxShadow: 'none',
                height: '100%',
              }}
            >
              <CardContent sx={{ p: 0 }}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={0.5}
                  mb={1}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{ fontSize: 16, color: '#00b67a' }}
                    />
                  ))}
                  <VerifiedIcon
                    sx={{ fontSize: 16, color: '#737373', ml: 'auto' }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ color: '#737373', ml: 0.5 }}
                  >
                    Invited
                  </Typography>
                </Stack>

                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 0.5,
                  }}
                >
                  {review.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    mb: 1,
                    color: '#333',
                  }}
                >
                  {review.text}
                </Typography>
                <Typography
                  variant="caption"
                  fontWeight={600}
                  sx={{ color: '#333' }}
                >
                  {review.name},{' '}
                  <span style={{ fontWeight: 400 }}>{review.time}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrustpilotSection;