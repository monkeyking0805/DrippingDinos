import React from 'react';
import { Box, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';
import minusFill from '@iconify/icons-eva/minus-fill';
import MIconButton from './@mui-extend/MIconButton';
import useWallet from '../hooks/useWallet';

export default function Incrementer({ available }) {
  const { mintAmount, setMintAmount } = useWallet();

  const incrementQuantity = () => {
    setMintAmount(mintAmount + 1);
  };
  const decrementQuantity = () => {
    setMintAmount(mintAmount - 1);
  };

  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032'
      }}
    >
      <MIconButton size="small" color="inherit" disabled={mintAmount <= 1} onClick={decrementQuantity}>
        <Icon icon={minusFill} width={16} height={24} />
      </MIconButton>
      <Typography
        variant="body2"
        component="span"
        sx={{
          width: 40,
          textAlign: 'center',
          display: 'inline-block'
        }}
      >
        {mintAmount}
      </Typography>
      <MIconButton size="small" color="inherit" disabled={mintAmount >= available} onClick={incrementQuantity}>
        <Icon icon={plusFill} width={16} height={24} />
      </MIconButton>
    </Box>
  );
};