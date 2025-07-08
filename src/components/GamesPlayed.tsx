import LessButton from "./LessButton"

const GamesPlayed = ({played = 0,rating = 0,score = 0,time = 0}) => {
  return (
    <div className='w-1/2 relative bg-gray-700  rounded-md min-h-96'>
        <LessButton></LessButton>
        <div className="bg-gray-600 p-7 rounded-md">
            GAMES PLAYED
            <div className="flex justify-between items-center mt-5">
                <p>#️⃣ {played} games</p>
                <p>⭐️ {rating}</p>
                <p>🌟 {score}</p>
                <p>⏳ {time} min</p>
            </div>
        </div>
    </div>
  )
}

export default GamesPlayed