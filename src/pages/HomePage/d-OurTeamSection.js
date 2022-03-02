import React from 'react';
import { Stack, Typography, Box, Grid, Paper } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

export default function OurTeamSection() {
  return (
    <Stack maxWidth="xl" mx="auto" spacing={4} mt={30}>
      <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase">
        Our team
      </Typography>

      <Box>
        <Grid container columns={2} spacing={7}>
          <Grid item md={1}>
            <Paper sx={{
              px: 16,
              py: 8,
              borderRadius: 3,
              borderColor: purple[600],
              borderWidth: 2,
              borderStyle: 'solid',
              backgroundImage: 'linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))'
            }}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" alt="member_reza" src="/assets/images/member_reza.png" sx={{ width: '100%' }} />
              </Stack>
              <Stack spacing={2} mt={5}>
                <Typography color={grey[100]} textTransform="uppercase" fontSize={28} fontWeight={800}>
                  Reza
                </Typography>
                <Typography color={purple['A400']} textTransform="uppercase" fontSize={20} fontWeight={700}>
                  Founder
                </Typography>
                <Typography color={grey[100]} fontSize={16}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid item md={1}>
            <Paper sx={{
              px: 16,
              py: 8,
              borderRadius: 3,
              borderColor: purple[600],
              borderWidth: 2,
              borderStyle: 'solid',
              backgroundImage: 'linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))'
            }}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" alt="member_jeffre" src="/assets/images/member_jeffre.png" sx={{ width: '100%', mt: 3 }} />
              </Stack>
              <Stack spacing={2} mt={5}>
                <Typography color={grey[100]} textTransform="uppercase" fontSize={28} fontWeight={800}>
                  Jeffre
                </Typography>
                <Typography color={purple['A400']} textTransform="uppercase" fontSize={20} fontWeight={700}>
                  Founder
                </Typography>
                <Typography color={grey[100]} fontSize={16}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>

        <Grid container columns={3} spacing={7} mt={1}>
          <Grid item md={1}>
            <Paper sx={{
              px: 8,
              py: 4,
              borderRadius: 3,
              borderColor: purple[600],
              borderWidth: 2,
              borderStyle: 'solid',
              backgroundImage: 'linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))'
            }}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" alt="member_eduardo" src="/assets/images/member_eduardo.png" sx={{ width: '100%' }} />
              </Stack>
              <Stack spacing={2} mt={5}>
                <Typography color={grey[100]} textTransform="uppercase" fontSize={28} fontWeight={800}>
                  Eduardo
                </Typography>
                <Typography color={purple['A400']} textTransform="uppercase" fontSize={20} fontWeight={700}>
                  3D-Artist
                </Typography>
                <Typography color={grey[100]} fontSize={16}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid item md={1}>
            <Paper sx={{
              px: 8,
              py: 4,
              borderRadius: 3,
              borderColor: purple[600],
              borderWidth: 2,
              borderStyle: 'solid',
              backgroundImage: 'linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))'
            }}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" alt="member_yuri" src="/assets/images/member_yuri.png" sx={{ width: '100%' }} />
              </Stack>
              <Stack spacing={2} mt={5}>
                <Typography color={grey[100]} textTransform="uppercase" fontSize={28} fontWeight={800}>
                  Yuri
                </Typography>
                <Typography color={purple['A400']} textTransform="uppercase" fontSize={20} fontWeight={700}>
                  Developer
                </Typography>
                <Typography color={grey[100]} fontSize={16}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid item md={1}>
            <Paper sx={{
              px: 8,
              py: 4,
              borderRadius: 3,
              borderColor: purple[600],
              borderWidth: 2,
              borderStyle: 'solid',
              backgroundImage: 'linear-gradient(to right, rgba(215, 76, 255, 0.26), rgba(255, 255, 255, 0))'
            }}>
              <Stack direction="row" justifyContent="center">
                <Box component="img" alt="member_victoria" src="/assets/images/member_victoria.png" sx={{ width: '100%' }} />
              </Stack>
              <Stack spacing={2} mt={5}>
                <Typography color={grey[100]} textTransform="uppercase" fontSize={28} fontWeight={800}>
                  Victoria
                </Typography>
                <Typography color={purple['A400']} textTransform="uppercase" fontSize={20} fontWeight={700}>
                  3D-Artist
                </Typography>
                <Typography color={grey[100]} fontSize={16}>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                </Typography>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}