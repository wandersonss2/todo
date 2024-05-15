import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Paper } from '@mui/material';

export default function TodoItem({todo, apagarTodo}) {
  return (
    <Paper style={{ padding: "1em 1em"}}>
    <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="apagar" onClick={() => apagarTodo(todo.id)}>
                <DeleteForeverIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start" tabIndex={-1} disableRipple
                />
              </ListItemIcon>
              <ListItemText primary={todo.text} />
            </ListItemButton>
          </ListItem>
          </Paper>
  );
}