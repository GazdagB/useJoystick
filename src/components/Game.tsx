
const Game = ({title = "Game Title",release = 1999, coverUrl = ""}) => {
  return (
    <div className="flex flex-col gap-7 mb-7">
        <div className="flex gap-5">
            <img className="h-30 w-25 object-cover object-center" src={coverUrl} alt="" />
            <div>
                <p className="font-bold text-xl">{title}</p>
                <p>📅 {release}</p>
            </div>
        </div>
    <div className="w-full h-[1px] bg-gray-400"></div>
    </div>
  )
}

export default Game