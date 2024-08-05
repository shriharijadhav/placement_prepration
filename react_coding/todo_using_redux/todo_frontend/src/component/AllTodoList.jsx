import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTodos } from '../redux/actions'
import SingleTodoItem from './SingleTodoItem'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Heading } from '@chakra-ui/react';


const AllTodoList = () => {

  const reFetchAllTodosFlag = useSelector((store) => store.reFetchAllTodosFlag)
  const allTodos = useSelector((store) => store.allTodos)
  const dispatch = useDispatch()


  useEffect(()=>{
    if(reFetchAllTodosFlag){
      dispatch(fetchAllTodos())
    }
  },[reFetchAllTodosFlag])
  return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
        {
          allTodos && (
            <Flex w={'100%'}  justifyContent={'center'} alignItems={'center'} direction={'column'}>
            <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Todo Name</Th>
              <Th>Assignee Name</Th>
              <Th>Priority</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
          {
            allTodos.map((todo) =>(
              <SingleTodoItem key={todo._id} todo={todo} />
            ))
          }
          </Tbody>
        </Table>
      </TableContainer>
              
            </Flex>
          )
        }
    </Flex>
  )
}

export default AllTodoList
