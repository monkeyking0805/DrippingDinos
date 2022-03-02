import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';

export default function IPadRoadmap({ data, selectedPosition, setSelectedPosition }) {
  return (
    <Box mx={6}>
      {/* Roadmap section */}
      <Box mt={14} position="relative">
        <Stack direction="row" mb={3}>
          <Box width="50%">
            <Typography
              color="primary"
              textTransform="uppercase"
              fontSize={20}
              fontWeight={500}
              textAlign="center"
            >{`${data[1].id}. ${data[1].title}`}</Typography>
          </Box>
          <Box width="50%">
            <Typography
              color="primary"
              textTransform="uppercase"
              fontSize={20}
              fontWeight={500}
              textAlign="center"
            >{`${data[3].id}. ${data[3].title}`}</Typography>
          </Box>
        </Stack>

        <Stack direction="row" mx={6}>
          <Stack direction="row" justifyContent="center" width="50%">
            {/* 2. Minting */}
            <Box position="relative">
              <Box
                component="img"
                src="/assets/images/roadmap2.png"
                alt="roadmap2"
                width="80px"
                height="80px"
                zIndex={99}
                position="relative"
                sx={{ cursor: 'pointer' }}
                onClick={() => setSelectedPosition(1)}
              />
              <Box
                className={selectedPosition > 1 ? 'roadmapLineRight-active' : 'roadmapLineRight'}
                sx={{ transform: 'skewY(14deg)' }}
                width="110%"
                position="absolute"
                zIndex={9}
                top={40}
                left={70}
              />
            </Box>
          </Stack>

          <Stack direction="row" justifyContent="center" width="50%">
            {/* 4. Charity */}
            <Box position="relative">
              <Box
                component="img"
                src="/assets/images/roadmap4.png"
                alt="roadmap4"
                width="80px"
                height="80px"
                zIndex={99}
                position="relative"
                sx={{ cursor: 'pointer' }}
                onClick={() => setSelectedPosition(3)}
              />
              <Box
                className={selectedPosition > 3 ? 'roadmapLineRight-active' : 'roadmapLineRight'}
                sx={{ transform: 'skewY(14deg)' }}
                width="120%"
                top={40}
                left={70}
                position="absolute"
                zIndex={9}
              />
            </Box>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-between" position="absolute" width="100%" top="60%">
          {/* 1. Designing */}
          <Box position="relative">
            <Box
              component="img"
              src="/assets/images/roadmap1.png"
              alt="roadmap1"
              width="80px"
              height="80px"
              position="relative"
              zIndex={99}
              sx={{ cursor: 'pointer' }}
              onClick={() => setSelectedPosition(0)}
            />

            <Box
              className={selectedPosition > 0 ? 'roadmapLineLeft-active' : 'roadmapLineLeft'}
              sx={{ transform: 'skewY(-14deg)' }}
              width="120%"
              top={12}
              left={70}
              position="absolute"
              zIndex={9}
            />
          </Box>

          {/* 3. DAO */}
          <Box position="relative">
            <Box
              component="img"
              src="/assets/images/roadmap3.png"
              alt="roadmap3"
              width="80px"
              height="80px"
              position="relative"
              zIndex={99}
              sx={{ cursor: 'pointer' }}
              onClick={() => setSelectedPosition(2)}
            />
            <Box
              className={selectedPosition > 2 ? 'roadmapLineLeft-active' : 'roadmapLineLeft'}
              sx={{ transform: 'skewY(-14deg)' }}
              width="120%"
              top={12}
              left={70}
              position="absolute"
              zIndex={9}
            />
          </Box>

          {/* 5. Fashion */}
          <Box
            component="img"
            src="/assets/images/roadmap5.png"
            alt="roadmap5"
            width="80px"
            height="80px"
            position="relative"
            zIndex={99}
            sx={{ cursor: 'pointer' }}
            onClick={() => setSelectedPosition(4)}
          />
        </Stack>

        <Stack direction="row" justifyContent="space-between" position="absolute" width="100%" top="140%">
          <Box>
            <Typography
              color="primary"
              textTransform="uppercase"
              fontSize={20}
              fontWeight={500}
            >{`${data[0].id}. ${data[0].title}`}</Typography>
          </Box>
          <Box>
            <Typography
              color="primary"
              textTransform="uppercase"
              fontSize={20}
              fontWeight={500}
            >{`${data[2].id}. ${data[2].title}`}</Typography>
          </Box>
          <Box>
            <Typography
              color="primary"
              textTransform="uppercase"
              fontSize={20}
              fontWeight={500}
            >{`${data[4].id}. ${data[4].title}`}</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Content */}
      <Box mt={20}>
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <Box
              component="img"
              alt="roadmap_hero"
              src={`/assets/images/${data[selectedPosition].image.split('.')[0]}_mobile.${data[selectedPosition].image.split('.')[1]}`}
            />
          </Grid>
          <Grid item sm={6} mt={20}>
            <Typography color="primary" textTransform="uppercase" fontSize={24} fontWeight={600} mb={4}>
              {data[selectedPosition].title}
            </Typography>

            <Typography fontSize={19} sx={{ color: '#E0E0E0' }}>{data[selectedPosition].content}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}