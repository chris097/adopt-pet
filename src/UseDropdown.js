import React, {useState} from 'react';

const useDropdown = (label, defaultState, options) =>{
    const [state, setState] = useState(defaultState);
    const id = `use-downdown-${label.replace(" ", "").toLowerCase()}`
    const dropDown = () => {
        return(
            <label htmlFor={label}>
                {label}
                <select 
                id={id}
                value={state}
                onChange={e => setState(e.target.value)}
                onBlur={e => setState(e.target.value)}
                disabled={options.length === 0}>
                    <option>All</option>
                    {options.map(item => 
                    <option key={item}
                    value={item}>
                        {item}
                    </option>
                        )}
                </select>
            </label>
        )
    }
    return [state, dropDown, setState]
}

export default useDropdown;