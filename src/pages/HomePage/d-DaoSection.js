import React from 'react';
import { Stack, Typography, Box, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

export default function DaoSection() {
  return (
    <Stack maxWidth="xl" mx="auto" spacing={4} mt={30}>
      <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase">
        Dao
      </Typography>

      <Typography color={grey[100]} fontSize={20} width="50%">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </Typography>

      <Box>
        <Grid container columns={7} spacing={8}>
          <Grid item md={3}>
            <Box component="img" alt="dao_hero" src="/assets/images/dao_hero.png" fullWidth />
            <Typography color={grey[100]} fontSize={18} fontWeight={700} mt={2} textTransform="uppercase">
              Dino pink #234
            </Typography>
          </Grid>

          <Grid item md={2}>
            <Stack spacing={5}>
              <Box>
                <Box component="img" alt="dao_1" src="/assets/images/dao1.png" fullWidth />
                <Typography color={grey[100]} fontSize={18} fontWeight={700} mt={2} textTransform="uppercase">
                  Dino pink #234
                </Typography>
              </Box>

              <Box component="img" alt="dao_cross" src="/assets/images/dao_cross.png" fullWidth />
            </Stack>
          </Grid>

          <Grid item md={2}>
            <Stack spacing={5}>
              <Box>
                <Box component="img" alt="dao_2" src="/assets/images/dao2.png" fullWidth />
                <Typography color={grey[100]} fontSize={18} fontWeight={700} mt={2} textTransform="uppercase">
                  Dino pink #234
                </Typography>
              </Box>

              <Box>
                <Box component="img" alt="dao_3" src="/assets/images/dao3.png" fullWidth />
                <Typography color={grey[100]} fontSize={18} fontWeight={700} mt={2} textTransform="uppercase">
                  Dino pink #234
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}