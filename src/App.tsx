import './App.css'
import Navbar from './components/Navbar';
import GamesCont from './components/GamesCont';

function App() {
 

  return (
    <div className='bg-gray-900 min-h-screen text-white'>
    <Navbar></Navbar>
    <GamesCont></GamesCont>
    </div>
  )
}

export default App
