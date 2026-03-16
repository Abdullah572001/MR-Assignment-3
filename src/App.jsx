
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/Header/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <footer></footer>
    </>
  )
}

export default App
