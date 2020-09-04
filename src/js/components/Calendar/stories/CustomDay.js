import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Calendar, Grommet, Stack, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const CustomDayCalendar = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Calendar fill>
          {({ date, day, isSelected, isInRange }) => {
            return (
              <Stack anchor="top-right">
                <Box background={isSelected ? 'neutral-1' : 'neutral-2'}>
                  <Text>Vacation</Text>
                </Box>
                <Text>{day}</Text>
              </Stack>
            );
          }}
        </Calendar>
      </Box>
    </Grommet>
  );
};

storiesOf('Calendar', module).add('Custom day', () => <CustomDayCalendar />);
