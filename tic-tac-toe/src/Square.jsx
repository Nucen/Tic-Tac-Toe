import { useState } from "react";

export const Square = () => {

    const [value, setValue] = useState(null)
    
    function handleClick() {
        setValue('X');
    }

    return (
        <button className="min-h-10 min-w-10" onClick={handleClick}>
            {value}
        </button>
    )
}