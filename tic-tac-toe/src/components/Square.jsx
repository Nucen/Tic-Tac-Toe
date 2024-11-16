

export const Square = ({value, onSquareClick}) => {

    return (
        <button className="min-h-10 min-w-10" onClick={onSquareClick}>
            {value}
        </button>
    )
}