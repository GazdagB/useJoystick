
interface ButtonProps {
  onClick: () => void;
  showGames: boolean;
}

const LessButton: React.FC<ButtonProps> = ({onClick,showGames}) => {
  return (
    <div onClick={onClick} className='bg-gray-800 cursor-pointer absolute top-3 right-3 rounded-full w-7 h-7 text-center flex items-center justify-center'>{showGames ? "-" : "+"}</div>
  );
}

export default LessButton