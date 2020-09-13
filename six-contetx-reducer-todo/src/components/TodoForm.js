import React, { useContext, useState } from "react";
import {
    FormGroup,
    Form,
    InputGroup,
    Input,
    InputGroupAddon,
    Button
} from "reactstrap"

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const ToDoForm = () => {
    const [toDoString, setToDoString] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handelSubmit = e => {
        e.preventDefault();
        if (toDoString === "") {
            return alert("Enter Todo value");
        }
        const todo = {
            toDoString,
            id: v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setToDoString("");
    };



    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Add TODOD"
                        value={toDoString}
                        onChange={e => setToDoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color="warning">
                            Add
                            </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
};

export default ToDoForm;
