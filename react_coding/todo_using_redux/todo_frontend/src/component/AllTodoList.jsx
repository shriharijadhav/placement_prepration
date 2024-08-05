import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTodos } from '../redux/actions'
import SingleTodoItem from './SingleTodoItem'

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
              {
                allTodos.map((todo) =>(
                  <SingleTodoItem key={todo._id} todo={todo} />
                ))
              }
            </Flex>
          )
        }
    </Flex>
  )
}

export default AllTodoList
