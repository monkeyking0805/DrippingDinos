import React from 'react';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Box,
  Grid,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { purple, grey } from '@mui/material/colors';
import { Icon } from '@iconify/react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    boxShadow: 'none'
  },
  '&.MuiPaper-root': {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<Icon icon="akar-icons:circle-plus" />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  fontSize: 28,
  color: purple['A400']
}));

export default function FaqSection() {
  return (
    <Box mt={30} maxWidth="xl" mx="auto">
      <Grid container columns={2} spacing={20}>
        <Grid item md={1}>
          <Stack spacing={1}>
            <Typography color={purple['A400']} textTransform="uppercase" fontWeight={700}>
              Support
            </Typography>

            <Typography color={grey[100]} fontSize={56} fontWeight={900} textTransform="uppercase">
              FAQ
            </Typography>

            <Typography color={grey[100]} fontSize={16}>
              Everything you need to know about the Dripping Dino`s. Can`t find the answer you`re looking for ? Please chat to our friendly team!
            </Typography>
          </Stack>
        </Grid>

        <Grid item md={1}>
          {
            [0, 1, 2, 3].map(itemIndex => (
              <Accordion key={itemIndex}>
                <AccordionSummary aria-controls="panel1a-content">
                  <Typography ml={3} color={purple['A400']} fontSize={24} textTransform="uppercase">
                    Where can I buy Dripping Dino`s NFT and be a part of the community?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ ml: 7 }}>
                  <Typography>
                    Minting date and website will be published soon. We will post the details ahead of time on our Discord server and Twitter account. The whitelist will be reserved for early adopters and the fan base community. After the mint is over, there will be an option to trade on secondary market platforms.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          }
        </Grid>
      </Grid>
    </Box>
  );
}