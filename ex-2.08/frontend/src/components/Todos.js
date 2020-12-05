import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  List,
  Segment,
  Header,
  Icon,
  Form,
} from "semantic-ui-react";
import axios from "axios";

const Todos = ({ menu }) => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);
  const getTodoList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/todos`
      );
      setTodoList(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log("Error in fetching data");
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);

  if (menu.activeItem !== "todos") return <></>;

  const handleChange = (e, { value }) => {
    setTodo(value);
  };
  const handleSubmit = async (e) => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/todos`,
        { todo: todo }
      );
      setTodoList(todoList.concat({ todo: result.data.todo }));
    } catch (err) {
      console.log("error in creating new todos ..", err.response.data.error);
    }
    // console.log(e.target);
    e.target.reset();
  };

  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="add circle" />
        Add to do list here.
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          action
          placeholder="e.g., collect books from library."
          onChange={handleChange}
        >
          <input />
          <Button type="submit">add</Button>
        </Input>
      </Form>
      <List bulleted>
        {todoList.map((n) => (
          <List.Item>{n.todo}</List.Item>
        ))}
      </List>
    </Segment>
  );
};

export default Todos;
