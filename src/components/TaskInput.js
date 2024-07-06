// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from '../features/tasks/tasksSlice';
// import { TextField, Button } from '@mui/material';

// const TaskInput = () => {
//   const [input, setInput] = useState('');
//   const dispatch = useDispatch();

//   const handleAddTask = () => {
//     if (input.trim()) {
//       dispatch(addTask(input));
//       setInput('');
//     }
//   };

//   return (
//     <div>
//       <TextField
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter a task"
//         variant="outlined"
//         fullWidth
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" onClick={handleAddTask}>
//         Add Task
//       </Button>
//     </div>
//   );
// };

// export default TaskInput;














import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (input.trim()) {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={3} mb={3}>
      <TextField
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{ mr: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;

