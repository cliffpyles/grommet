import React from 'react';

import { Grommet, Box, Image, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';

export const Fill = () => {
  return (
    <Grommet theme={grommet}>
      <Box align="start" gap="small">
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image fit="cover" fill src="//v2.grommet.io/assets/IMG_4245.jpg" />
          </Anchor>
        </Box>
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image
              fit="contain"
              fill
              src="//v2.grommet.io/assets/IMG_4245.jpg"
            />
          </Anchor>
        </Box>
      </Box>
    </Grommet>
  );
};
