

export const Square = ({value, onSquareClick}) => {

    return (
        <button className="bg-cyan-500 h-20 w-20 border-2 border-cyan-700 text-6xl text-cyan-400" onClick={onSquareClick}>
            {value}
        </button>
    )
}