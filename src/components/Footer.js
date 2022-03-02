import React from 'react';
import { styled, Divider, Container, Grid, Typography, Stack, Box, Button, IconButton } from '@mui/material';
import { grey, purple } from '@mui/material/colors';
import { Icon } from '@iconify/react';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[100]),
  fontSize: 16,
  textTransform: 'uppercase',
  paddingTop: 10,
  paddingBottom: 10,
  width: '60%',
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

export default function Footer() {
  return (
    <RootStyle>
      <Divider />
      <Container maxWidth="2xl" sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
          columns={4}
          alignItems="center"
        >
          <Grid item md={1}>
            <Stack direction="row" justifyContent="center">
              <Box component="img" alt="logo" src="/assets/images/logo.png" />
            </Stack>
            <Stack direction="row" justifyContent="center" mt={5}>
              <ColorButton>
                Join us on discord
              </ColorButton>
            </Stack>
          </Grid>

          <Grid item md={1}>
            <Stack spacing={5}>
              <Typography color={grey[100]} fontSize={16} fontWeight={800} textTransform="uppercase" textAlign="center">
                About us
              </Typography>
              <Typography color={grey[100]} fontSize={16} fontWeight={800} textTransform="uppercase" textAlign="center">
                Roadmap
              </Typography>
              <Typography color={grey[100]} fontSize={16} fontWeight={800} textTransform="uppercase" textAlign="center">
                Mission
              </Typography>
              <Typography color={grey[100]} fontSize={16} fontWeight={800} textTransform="uppercase" textAlign="center">
                Team
              </Typography>
            </Stack>
          </Grid>

          <Grid item md={1}>
            <Typography color={grey[100]} fontSize={16} fontWeight={800} textTransform="uppercase" textAlign="center">
              FAQ
            </Typography>
          </Grid>

          <Grid item md={1}>
            <Typography color={purple['A400']} fontSize={16} fontWeight={700} textTransform="uppercase" textAlign="center">
              Join the community
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center" mt={3}>
              <IconButton sx={{ color: grey[100] }}>
                <Icon icon="ant-design:instagram-filled" />
              </IconButton>

              <IconButton sx={{ color: grey[100] }}>
                <Icon icon="akar-icons:discord-fill" />
              </IconButton>

              <IconButton sx={{ color: grey[100] }}>
                <Icon icon="akar-icons:twitter-fill" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: 'center'
          }}
        >
          Dripping Dino`s © All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}