import { Flex, Skeleton, SkeletonText, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTodos } from '../redux/actions'
import SingleTodoItem from './SingleTodoItem'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Heading } from '@chakra-ui/react';


const SkeletonForTable = () => {
    const [allTodos,setallTodos] = useState([1,2,3,4,5,6])
  return (
    <Flex w={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'} >
         {
             <Flex w={'100%'}  justifyContent={'center'} alignItems={'center'} direction={'column'} p={'20px 0px'}>
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
                <Tr key={todo}>
                <Td>
                <Skeleton height="20px" mb={4} />
                </Td>
                <Td>
                <Skeleton height="20px" mb={4} />
                </Td>
                <Td>
                <Skeleton height="20px" mb={4} />
                </Td>
                <Td>
                <Skeleton height="20px" mb={4} />
                </Td>
                <Td>
                <Skeleton height="20px" mb={4} />
                </Td>
              </Tr>
            ))
          }
          </Tbody>
        </Table>
      </TableContainer>
              
            </Flex>
         }
    </Flex>
  )
}

export default SkeletonForTable
