import { Container, List } from '@mui/material'
import React, {useState} from 'react'
import Form from '../components/form'
import TodoItem from '../components/item'

export default function Home() {
    const [todos, setTodos] = useState([]);
    const todoHandler = (todo) => {
        setTodos([...todos, todo]);
    };
    const apagarTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);
    };

  return (
    <Container maxWidth="xs" style={{ marginTop: "1em"}}>
      <Form todoHandler={todoHandler}/>
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) =>(

            <div key={todo.id} style={{marginTop: "2em"}}>
                <TodoItem todo={todo} apagarTodo={apagarTodo}/>  
            </div>
                      
        ))}
      </List>
    </Container>
  );
};
