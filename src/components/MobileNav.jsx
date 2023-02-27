import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { CalendarMonth, Person, Schedule, Today } from '@mui/icons-material';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%" ,position:"fixed"}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Incoming" icon={<Schedule />} />
        <BottomNavigationAction label="Today" icon={<Today />} />
        <BottomNavigationAction label="Calendar" icon={<CalendarMonth />} />
        <BottomNavigationAction label="Profile" icon={<Person />} />
      </BottomNavigation>
    </Box>
  );
}