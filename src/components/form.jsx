import { Button, Paper, TextField } from '@mui/material';
import React, {useState} from 'react';

export default function Form({todoHandler}) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCriar = (text) => {
        const todObj = {text: text, id: id};
        setId(id + 1);
        todoHandler(todObj);
        document.getElementById("outlined-basic").value = null;
    }


  return (
    <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex", justifyContent: "center"}}>
            <TextField id="outlined-basic" 
            label="Tarefas" 
            variant="outlined" onChange={(e) => setText(e.target.value)} 
            fullWidth 
            />
            <Button variant="text" onClick={ () => todoCriar(text)}>
                Criar
                </Button>
        </div>

    </Paper>
  );
}
