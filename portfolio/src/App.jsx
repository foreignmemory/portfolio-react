
import './App.css'
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
      <>
      <header>
        <Navbar />
      </header>

      
        <Outlet />
      </>
  )
}

export default App;
