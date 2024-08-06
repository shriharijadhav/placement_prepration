
import './App.css'
import { Flex } from '@chakra-ui/react'
import TodoForm from './component/TodoForm'
import { lazy, Suspense } from 'react'
import SkeletonForTable from './component/SkeletonForTable';

const AllTodoList = lazy(() => import('./component/AllTodoList'));


function App() {
 
  return (
    <Flex w={'100%'} minH={'100vh'} direction={'column'} gap={'50px'} p={'20px 0px'}>
        <TodoForm/>
        <Suspense fallback={<SkeletonForTable/>}>
          <AllTodoList/>
        </Suspense>
    </Flex>
  )
}

export default App
