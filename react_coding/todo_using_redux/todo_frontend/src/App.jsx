
import './App.css'
import { Flex } from '@chakra-ui/react'
import TodoForm from './component/TodoForm'
import AllTodoList from './component/AllTodoList'

function App() {
 
  return (
    <Flex w={'100%'} minH={'100vh'} direction={'column'} gap={'50px'} p={'20px 0px'}>
        <TodoForm/>
        <AllTodoList/>
    </Flex>
  )
}

export default App
