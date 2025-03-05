import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home/Home'
import MovieDetail from './assets/components/MovieDetail/MovieDetail'
import NotFound from './assets/components/NotFound/NotFound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/movie/:id' element={<MovieDetail />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  )
}

export default App
