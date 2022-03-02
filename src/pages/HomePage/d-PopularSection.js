import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function PopularSection() {
  return (
    <Box mt={30} maxWidth="xl" mx="auto">
      <Box width="50%" sx={{ mx: 'auto' }}>
        <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase" textAlign="center">
          The most popular dino`s
        </Typography>
      </Box>

      <Grid container columns={3} spacing={5} mt={10}>
        <Grid item md={1}>
          <Box component="img" alt="popular_1" src="/assets/images/popular1.png" />
        </Grid>
        <Grid item md={1}>
          <Box component="img" alt="popular_2" src="/assets/images/popular2.png" />
        </Grid>
        <Grid item md={1}>
          <Box component="img" alt="popular_3" src="/assets/images/popular3.png" />
        </Grid>
      </Grid>
    </Box>
  );
}