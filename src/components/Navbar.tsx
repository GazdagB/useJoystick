import JoyStick from "../assets/joystick.png"

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center rounded-lg bg-sky-900 text-white p-4">
            <div className="flex items-center gap-2 font-bold">
              <img className={"w-10"} src={JoyStick} alt="" />
              useJoyStick
            </div>

            <input className="bg-sky-800 py-1 px-4 rounded-md w-1/3" type="text" placeholder="Search games..." />

            <p className="hidden md:block">Found <span className="font-bold">0</span> top results</p>
        </div>
    </div>
  )
}

export default Navbar