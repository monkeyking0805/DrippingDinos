import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

export default function IPhoneIntroSection() {
  return (
    <Stack mx={3} my={5} spacing={8}>
      <Stack spacing={2}>
        <Box>
          <Typography fontSize={16}>
            Dripping Dino’s is more than just an NFT project, we are creating a lifestyle brand that will be built together with our amazing community. Our collection will consist of <Typography variant="primary" color="primary" component="span">8000 unique artworks</Typography> created with pure passion and precision by our highly skilled designing team. We are making sure you’re not only dripped out in the Digital world but also in the real world.
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="end">
          <Box component="img" src="/assets/images/dino_4.png" width="60%" alt="" />
        </Stack>
      </Stack>

      <Stack spacing={2}>
        <Box>
          <Typography fontSize={16}>
            We will not only deliver the most outstanding and aesthetically pleasing art, but <Typography variant="primary" color="primary" component="span">we are also making sure that our holders will get real utility from them.</Typography> Holders will be able to earn our native $DRIP token every day and spend/invest it into our ecosystem. Our DAO will support the project long term and help fund all future projects and plans such as our charity and designer brand. We set up our tokenomics to be as stable as possible with multiple institutions backing the value of $DRIP.
          </Typography>
        </Box>

        <Stack direction="row" justifyContent="start">
          <Box component="img" src="/assets/images/dino_1.png" width="60%" alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
}