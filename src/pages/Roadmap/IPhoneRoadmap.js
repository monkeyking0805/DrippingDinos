import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function IPhoneRoadmap({ data, selectedPosition, setSelectedPosition }) {

  return (
    <Box mx={3} mt={12} position="relative">
      <Box position="absolute" className="roadmapLine-vertical" height="95%" left={8} top={-10} zIndex={9} />
      <Box position="absolute" className="roadmapLine-vertical-active" height="25%" left={8} top={-10} zIndex={9} />
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box component="img" src="/assets/images/roadmap1.png" width="20px" height="20px" alt="" position="relative" zIndex={99} />
        <Typography color="primary" textTransform="uppercase" fontWeight={700}>{data[0].id}.{data[0].title}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="end" mt={6} mb={12}>
        <Box width="70%">
          <Box component="img" src={`/assets/images/${data[0].image.split('.')[0]}_mobile.${data[0].image.split('.')[1]}`} width="100%" />
          <Typography mt={2}>{data[0].content}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box component="img" src="/assets/images/roadmap2.png" width="20px" height="20px" alt="" position="relative" zIndex={99} />
        <Typography color="primary" textTransform="uppercase" fontWeight={700}>{data[1].id}.{data[1].title}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="end" mt={6} mb={12}>
        <Box width="70%">
          <Box component="img" src={`/assets/images/${data[1].image.split('.')[0]}_mobile.${data[1].image.split('.')[1]}`} width="100%" />
          <Typography mt={2}>{data[1].content}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box component="img" src="/assets/images/roadmap3.png" width="20px" height="20px" alt="" position="relative" zIndex={99} />
        <Typography color="primary" textTransform="uppercase" fontWeight={700}>{data[2].id}.{data[2].title}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="end" mt={6} mb={12}>
        <Box width="70%">
          <Box component="img" src={`/assets/images/${data[2].image.split('.')[0]}_mobile.${data[2].image.split('.')[1]}`} width="100%" />
          <Typography mt={2}>{data[2].content}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box component="img" src="/assets/images/roadmap4.png" width="20px" height="20px" alt="" position="relative" zIndex={99} />
        <Typography color="primary" textTransform="uppercase" fontWeight={700}>{data[3].id}.{data[3].title}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="end" mt={6} mb={12}>
        <Box width="70%">
          <Box component="img" src={`/assets/images/${data[3].image.split('.')[0]}_mobile.${data[3].image.split('.')[1]}`} width="100%" />
          <Typography mt={2}>{data[3].content}</Typography>
        </Box>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Box component="img" src="/assets/images/roadmap5.png" width="20px" height="20px" alt="" position="relative" zIndex={99} />
        <Typography color="primary" textTransform="uppercase" fontWeight={700}>{data[4].id}.{data[4].title}</Typography>
      </Stack>

      <Stack direction="row" justifyContent="end" mt={6} mb={12}>
        <Box width="70%">
          <Box component="img" src={`/assets/images/${data[4].image.split('.')[0]}_mobile.${data[4].image.split('.')[1]}`} width="100%" />
          <Typography mt={2}>{data[4].content}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}