
import Game from './Game'
import LessButton from './LessButton'
import { mockedGames } from '../mocks/mockedGames'

const MoviesFound = () => {
  return (
    <div className='w-1/2 relative bg-gray-700 p-7 rounded-md min-h-96'>
      <LessButton></LessButton>
      {mockedGames.map((game) => (
        <Game title={game.title} release={game.release} coverUrl={game.coverUrl} key={game.id} /> 
      ))}
    </div>
  )
}

export default MoviesFound