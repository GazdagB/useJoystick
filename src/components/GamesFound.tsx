
import Game from './Game'
import LessButton from './LessButton'

const MoviesFound = () => {
  return (
    <div className='w-1/2 relative bg-gray-700 p-7 rounded-md min-h-96'>
      <LessButton></LessButton>
      <Game></Game>
      <Game></Game>
    </div>
  )
}

export default MoviesFound