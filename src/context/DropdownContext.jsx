import React, { useState,createContext } from 'react'

export const dropdownContext = createContext();
export default function DropdownContext({ children }) {
    const [dropdownVal, setDropdownVal] = useState("filterBy");
    return (
        <dropdownContext.Provider value={[dropdownVal, setDropdownVal]}>
            {children}
        </dropdownContext.Provider>
    )
}
