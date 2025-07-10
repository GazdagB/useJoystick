
import Game from './Game'
import LessButton from './LessButton'
import { mockedGames } from '../mocks/mockedGames'
import { useState } from 'react'

const MoviesFound = () => {

  const [showGames, setShowGames] = useState(true)

  return (
    <div className='w-1/2 relative bg-gray-700 p-7 rounded-md min-h-96 transition-height duration-300 h-auto'>
      <LessButton showGames={showGames} onClick={()=>{setShowGames(prev => !prev)}}></LessButton>
      {mockedGames.map((game) => (
        showGames &&
        <Game title={game.title} release={game.release} coverUrl={game.coverUrl} key={game.id} /> 
      ))}
    </div>
  )
}

export default MoviesFound