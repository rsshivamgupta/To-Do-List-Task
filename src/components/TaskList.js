
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../features/tasks/tasksSlice';
import { List, ListItem, ListItemText, IconButton, Checkbox, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [editOpen, setEditOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: null, text: '' });

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setEditOpen(true);
  };

  const handleEditSubmit = () => {
    dispatch(editTask(currentTask));
    setEditOpen(false);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Paper elevation={3} sx={{ width: '100%', maxWidth: 600, padding: 2 }}>
        <List>
          {tasks.map(task => (
            <ListItem key={task.id} divider>
              <Checkbox
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <ListItemText
                primary={task.text}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                sx={{ textAlign: 'center' }}
              />
              <IconButton edge="end" onClick={() => handleEditTask(task)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit your task below.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            fullWidth
            value={currentTask.text}
            onChange={(e) => setCurrentTask({ ...currentTask, text: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TaskList;
