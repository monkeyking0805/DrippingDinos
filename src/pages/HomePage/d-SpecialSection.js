import React from 'react';
import { Stack, Typography, Box, Grid, Link } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

export default function SpecialSection() {
  return (
    <Stack mt={30}>
      <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase" textAlign="center">
        Our special mission
      </Typography>

      <Stack sx={{ background: 'url(/assets/images/earth.png)' }} direction="row" justifyContent="center">
        <Box component="img" src="/assets/images/twin_dinos.png" alt="twin_dinos" />
      </Stack>

      <Box maxWidth="lg" mx="auto" mt={10}>
        <Grid container columns={2} spacing={20}>
          <Grid item md={1}>
            <Stack spacing={5}>
              <Typography color={grey[100]} fontSize={32} fontWeight={900} textTransform="uppercase" textAlign="center">
                GiveAway's
              </Typography>

              <Typography color={grey[100]} fontSize={16}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={1}>
            <Stack spacing={5}>
              <Typography color={grey[100]} fontSize={32} fontWeight={900} textTransform="uppercase" textAlign="center">
                Charity&volunteering
              </Typography>

              <Typography color={grey[100]} fontSize={16}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              </Typography>

              <Typography color={grey[100]} fontSize={16}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              </Typography>

              <Stack direction="row" justifyContent="end">
                <Link href="#" color={purple['A400']} textTransform="uppercase">Find out more</Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}