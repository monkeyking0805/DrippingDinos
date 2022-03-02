import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Badge, Box, Link, Stack } from '@mui/material';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

// ----------------------------------------------------------------------

IconBullet.propTypes = {
  type: PropTypes.oneOf(['subheader', 'item'])
};

function IconBullet({ type = 'item' }) {
  return (
    <Box sx={{ width: 24, height: 16, display: 'flex', alignItems: 'center' }}>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'currentColor',
          ...(type !== 'item' && { ml: 0, width: 8, height: 2, borderRadius: 2 })
        }}
      />
    </Box>
  );
}

MenuDesktopItem.propTypes = {
  item: PropTypes.object,
  pathname: PropTypes.string,
  isHome: PropTypes.bool,
  isOffset: PropTypes.bool,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};

function MenuDesktopItem({ item, pathname, isHome, isOpen, isOffset, onOpen, onClose }) {
  const { title, path } = item;
  const isActive = pathname === path;
  return (
    <LinkStyle
      to={path}
      component={RouterLink}
      sx={{
        ...(isHome && { color: 'common.white' }),
        ...(isOffset && { color: 'text.primary' }),
        ...(isActive && { color: 'primary.main' }),
        fontSize: { xl: 20, lg: 16, md: 12 }
      }}
    >
      {title}
    </LinkStyle>
  );
}

DesktopNavbar.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array
};

export default function DesktopNavbar({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack direction="row">
      {navConfig.map((link) => link.ready ? (
        <Stack 
          key={link.title} 
          sx={{ px: { xl: 7, md: 4 }, borderLeft: '1px solid #F2F2F2' }} 
          justifyContent="center"
        >
          <MenuDesktopItem
            item={link}
            pathname={pathname}
            isOpen={open}
            onOpen={handleOpen}
            onClose={handleClose}
            isOffset={isOffset}
            isHome={isHome}
          />
        </Stack>
      ) : (

        <Stack 
          key={link.title} 
          sx={{ px: { xl: 7, md: 4 }, borderLeft: '1px solid #F2F2F2' }} 
          justifyContent="center"
        >
          <Badge badgeContent="SOON" color="primary" sx={{ fontSize: 10 }}>
            <MenuDesktopItem
              item={link}
              pathname={pathname}
              isOpen={open}
              onOpen={handleOpen}
              onClose={handleClose}
              isOffset={isOffset}
              isHome={isHome}
            />
          </Badge>
        </Stack>
      ))}
    </Stack>
  );
}
