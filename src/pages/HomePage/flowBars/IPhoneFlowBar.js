import React from 'react';
import { Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';

export default function IPhoneFlowBar({ customSx }) {
  return (
    <Stack className="skewBar" sx={{ height: 40, ...customSx }} justifyContent="center">
      <marquee>
        <Stack direction="row" spacing={5} alignItems="center">
          <Icon icon="emojione-monotone:eight-pointed-star" />
          <Typography
            textTransform="uppercase"
            color={grey[100]}
            fontSize={20}
            fontFamily="'Dela Gothic One', cursive"
            fontWeight={500}
          >
            More than just fashion
          </Typography>
        </Stack>
      </marquee>
    </Stack>
  );
};