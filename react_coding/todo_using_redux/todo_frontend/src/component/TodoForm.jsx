import { Button, Flex, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import {  saveTodoInDatabase, updateTodoForm } from '../redux/actions'
const TodoForm = () => {
   
    const todoForm = useSelector((store) => store.todoForm)
    const todoName = todoForm.todoName
    const assigneeName = todoForm.assigneeName
    const priority = todoForm.priority


    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
      e.preventDefault();
      dispatch(saveTodoInDatabase(todoForm))
    }

  return (
    <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} borderBottom={'2px solid gray'} p={'20px 0px'}>
        <Flex  onSubmit={(e)=>{handleSubmit(e)}}  as={'form'} direction={'column'} gap={'20px'} bg={'gray.900'} p={'50px'} border={'1px solid white'} borderRadius={'lg'}>
            <FormControl>
                <FormLabel>Todo Name</FormLabel>
                <Input name='todoName' value={todoName} onChange={(e)=>{dispatch(updateTodoForm(e.target.value,e.target.name))}}  placeholder='Enter todo name' type='todoName' />
            </FormControl>
            <FormControl>
                <FormLabel>Assignee Name</FormLabel>
                <Input name='assigneeName' value={assigneeName} onChange={(e)=>{dispatch(updateTodoForm(e.target.value,e.target.name))}}  placeholder='Enter assignee name' type='assigneeName' />
            </FormControl>
            <FormControl>
            <FormLabel>Select Priority</FormLabel>
            <RadioGroup name='priority' onChange={(value)=>{dispatch(updateTodoForm(value,'priority'))}} value={priority}>
            <Stack direction='row'>
              <Radio value='1'>High</Radio>
              <Radio value='2'>Medium</Radio>
              <Radio value='3'>Low</Radio>
            </Stack>
          </RadioGroup>
          
        </FormControl>
        <Button type='submit' >Submit</Button>
        </Flex>
    </Flex>
  )
}

export default TodoForm
