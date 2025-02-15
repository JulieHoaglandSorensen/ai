import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';

export default function ChatSidebarContainer({ open, toggleSidebar, person }) {
  const DrawerList = (
    <Box
      sx={{
        width: 300,
        padding: 2,
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
        height: '100%',
      }}
      role='presentation'
      onClick={toggleSidebar(false)}
    >
      {person ? (
        <div className='p-4 bg-white shadow-md rounded-lg'>
          <div className='flex flex-col items-center mb-4'>
            <Avatar
              src={person.profileImage}
              alt={person.name}
              sx={{
                width: 80,
                height: 80,
                border: '3px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginBottom: 2,
              }}
            />
            <h3 className='text-xl font-bold text-gray-800'>{person.name}</h3>
          </div>
          <p className='text-sm text-gray-500 mb-2'>
            <strong>Bio:</strong> {person.bio}
          </p>
          <p className='text-sm text-gray-500 mb-2'>
            <strong>MBTI:</strong> {person.mbti}
          </p>
          <p className='text-sm text-gray-500 mb-2'>
            <strong>Hobbies:</strong> {person.hobbies}
          </p>
          <p className='text-sm text-gray-500 mb-2'>
            <strong>Fun fact:</strong> {person.funfact}
          </p>
        </div>
      ) : (
        <p>No person selected.</p>
      )}
    </Box>
  );

  return (
    <Drawer open={open} onClose={toggleSidebar(false)}>
      {DrawerList}
    </Drawer>
  );
}
