import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const SingleTodoItem = ({todo}) => {
  return (
    <Flex gap={'10px'}>
      <Text>{todo.todoName}</Text>
      <Text>{todo.assigneeName}</Text>
      <Text>{todo.priority}</Text>
    </Flex>
  )
}

export default SingleTodoItem
