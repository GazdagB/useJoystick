import JoyStick from "../assets/joystick.png"

const Navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center bg-gray-800 text-white p-4">
            <img className={"w-10"} src={JoyStick} alt="" />
            usePopcorn
        </div>
    </div>
  )
}

export default Navbar