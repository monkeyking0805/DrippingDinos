import React from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Container, useMediaQuery, Stack, IconButton, Link } from '@mui/material';
import { Icon } from '@iconify/react';
import useOffSetTop from '../../hooks/useOffSetTop';
import MHidden from '../@mui-extend/MHidden';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import IPhoneNavbar from './IPhoneNavbar';
import { DISCORD_URL, INSTAGRAM_URL, TWITTER_URL } from '../../constants';

// ----------------------------------------------------------------------

const navConfig = [
  { title: 'Home', path: '/', ready: true },
  { title: 'Collection', path: '/collection', ready: false },
  { title: 'Roadmap', path: '/roadmap', ready: true },
  { title: 'DAO', path: '/dao', ready: true },
  { title: 'Charity', path: '/charity', ready: true },
  { title: 'Shop', path: '/shop', ready: false },
];

const APP_BAR_MOBILE = 30;
const APP_BAR_DESKTOP = 60;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

export default function TopNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', height: 'auto', borderBottom: '1px solid #F2F2F2' }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.default',
            height: { md: APP_BAR_DESKTOP - 16 }
          })
        }}
      >
        <Container
          maxWidth="2xl"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%'
          }}
        >
          <Stack
            pr={{ xl: 6, lg: 3, md: 6, sm: 3, xs: 3 }}
            pl={{ xl: 3, lg: 1, md: 3 }}
            justifyContent="center"
            sx={{ borderRight: { xl: '1px solid #F2F2F2', lg: '1px solid #F2F2F2', md: '1px solid #F2F2F2', sm: 'none' } }}
          >
            <RouterLink to="/">
              <img
                src="/assets/images/logo.png"
                alt="logo"
                width={isDesktop ? '60' : '50'}
              />
            </RouterLink>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <MHidden width="mdDown">
            <DesktopNavbar
              isOffset={isOffset}
              isHome={isHome}
              navConfig={navConfig}
            />

            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ borderLeft: '1px solid #F2F2F2' }} pl={3}>
              <IconButton sx={{ color: '#F2F2F2' }} component={Link} href={INSTAGRAM_URL}>
                <Icon icon="ant-design:instagram-filled" />
              </IconButton>

              <IconButton sx={{ color: '#F2F2F2' }} component={Link} href={DISCORD_URL}>
                <Icon icon="akar-icons:discord-fill" />
              </IconButton>

              <IconButton sx={{ color: '#F2F2F2' }} component={Link} href={TWITTER_URL}>
                <Icon icon="akar-icons:twitter-fill" />
              </IconButton>
            </Stack>
          </MHidden>

          <MHidden width="mdUp">
            <MHidden width="smDown">
              <MobileNavbar isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </MHidden>
            <MHidden width="smUp">
              <IPhoneNavbar isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
            </MHidden>
          </MHidden>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}
