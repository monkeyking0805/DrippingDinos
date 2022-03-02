import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Container,
  Toolbar,
  List,
  Drawer,
  ListItemText,
  ListItemButton,
  Stack,
  IconButton,
  Badge,
  Typography,
  Box,
  Link
} from '@mui/material';
import { grey } from '@mui/material/colors';
import Scrollbar from '../Scrollbar';
import MIconButton from '../@mui-extend/MIconButton';
import { DISCORD_URL, INSTAGRAM_URL, TWITTER_URL } from '../../constants';

// ----------------------------------------------------------------------

const ITEM_SIZE = 48;
const PADDING = 2.5;

const ListItemStyle = styled(ListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  height: ITEM_SIZE,
  textTransform: 'capitalize',
  paddingLeft: theme.spacing(PADDING),
  paddingRight: theme.spacing(2.5),
  color: theme.palette.text.secondary
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: 30,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  })
}));

MenuMobileItem.propTypes = {
  item: PropTypes.object,
  isOpen: PropTypes.bool,
  isActive: PropTypes.bool,
  onOpen: PropTypes.func
};

function MenuMobileItem({ item, isActive }) {
  const { title, path } = item;

  return (
    <ListItemStyle
      to={path}
      component={RouterLink}
      sx={{
        ...(isActive && { color: '#CA3BFD' }),
        color: '#F2F2F2',
        py: 5
      }}
    >
      {
        item.ready ? (
          <ListItemText
            primary={title}
            primaryTypographyProps={{ sx: { fontSize: 26, fontWeight: 800, textTransform: 'uppercase' } }}
            sx={{ textAlign: 'center' }}
          />
        ) : (
          <ListItemText
            primary={
              <Badge badgeContent="SOON" color="primary" sx={{ fontSize: 10 }}>
                <Typography fontSize={26} fontWeight={800} textTransform="uppercase">{title}</Typography>
              </Badge>
            }
            sx={{ textAlign: 'center' }}
          />
        )
      }
    </ListItemStyle>
  );
}

MobileNavbar.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool
};

// ----------------------------------------------------------------------

export default function MobileNavbar({ navConfig }) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <MIconButton
        onClick={handleDrawerOpen}
        sx={{ ml: 1, color: '#F2F2F2' }}
      >
        <Icon icon={menu2Fill} />
      </MIconButton>

      <Drawer
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { height: '100%' } }}
        anchor="top"
      >
        <ToolbarStyle disableGutters sx={{ borderBottom: '1px solid #F2F2F2' }}>
          <Container
            maxWidth="2xl"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <Stack px={3} justifyContent="center">
              <RouterLink to="/">
                <img
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={50}
                />
              </RouterLink>
            </Stack>

            <MIconButton
              onClick={handleDrawerClose}
              sx={{ ml: 1, color: '#F2F2F2' }}
            >
              <Icon icon="akar-icons:cross" />
            </MIconButton>
          </Container>
        </ToolbarStyle>

        <Box position="absolute" top="50%" width="100%">
          <Typography
            fontSize={80}
            fontWeight={900}
            textTransform="uppercase"
            color={grey[900]}
            textAlign="center"
            sx={{ filter: 'blur(4px)' }}
          >
            DRIPPING dino`s
          </Typography>
        </Box>

        <Scrollbar sx={{ position: 'relative' }}>
          <List disablePadding sx={{ my: 6 }}>
            {navConfig.map((link) => (
              <MenuMobileItem
                key={link.title}
                item={link}
                isActive={pathname === `/${link.path}`}
              />
            ))}
          </List>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <IconButton sx={{ color: '#F2F2F2', fontSize: 32 }} component={Link} href={INSTAGRAM_URL}>
              <Icon icon="ant-design:instagram-filled" />
            </IconButton>

            <IconButton sx={{ color: '#F2F2F2', fontSize: 32 }} component={Link} href={DISCORD_URL}>
              <Icon icon="akar-icons:discord-fill" />
            </IconButton>

            <IconButton sx={{ color: '#F2F2F2', fontSize: 32 }} component={Link} href={TWITTER_URL}>
              <Icon icon="akar-icons:twitter-fill" />
            </IconButton>
          </Stack>
        </Scrollbar>
        <Box width="45%" position="absolute" bottom={0}>
          <Box
            component="img"
            src="/assets/images/hero.png"
            width="100%"
          />
        </Box>
      </Drawer>
    </>
  );
}
