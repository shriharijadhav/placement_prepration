import { Button, Flex, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { deleteTodoById, editTodo } from '../redux/actions';

const SingleTodoItem = ({todo}) => {
    // console.log(todo)
    const dispatch = useDispatch()
  return (
    <Tr >
        <Td>{todo.todoName}</Td>
        <Td>{todo.assigneeName}</Td>
        <Td>{todo.priority}</Td>
        <Td>
            <Button onClick={()=>{dispatch(editTodo(todo._id))}} leftIcon={<FaRegEdit />} colorScheme="orange" variant="solid">
                Edit
            </Button>
        </Td>
        <Td>
            <Button onClick={()=>{dispatch(deleteTodoById(todo._id))}} leftIcon={<RiDeleteBin6Line />} colorScheme="red" variant="solid">
                Delete
            </Button>
        </Td>
    </Tr>
  )
}

export default SingleTodoItem
