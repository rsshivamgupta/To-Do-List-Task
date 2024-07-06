
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Box, Paper } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Paper elevation={3} sx={{ width: '100%', maxWidth: 600, padding: 4 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: 'purple' }} >
                  <span>  <b>To-Do List</b></span> 
          </Typography>
          <TaskInput /> 
          <TaskList />
        </Paper>
      </Box>
    </Provider>
  );
}

export default App;
