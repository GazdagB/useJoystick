import GamesFound from "./GamesFound"
import GamesPlayed from "./GamesPlayed"

const GamesCont = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6x flex gap-5">
        <GamesFound></GamesFound>
        <GamesPlayed></GamesPlayed>
    </div>
  )
}

export default GamesCont