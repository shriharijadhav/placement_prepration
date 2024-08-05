import { Button, Flex, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleTodoItem = ({todo}) => {
  return (
    <Tr >
        <Td>{todo.todoName}</Td>
        <Td>{todo.assigneeName}</Td>
        <Td>{todo.priority}</Td>
        <Td>
            <Button leftIcon={<FaRegEdit />} colorScheme="orange" variant="solid">
                Edit
            </Button>
        </Td>
        <Td>
            <Button leftIcon={<RiDeleteBin6Line />} colorScheme="red" variant="solid">
                Delete
            </Button>
        </Td>
    </Tr>
  )
}

export default SingleTodoItem
