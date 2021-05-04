import { createContext, useState, ReactNode, useEffect } from 'react'


interface DarkModeContextData {
    isDarkMode: boolean,
    toggleDarkMode: () => void
}

interface IsDarkModeProviderProps{
    children: ReactNode;
}


export const DarkModeContext = createContext({} as DarkModeContextData)

export function DarkModeProvider({ children }: IsDarkModeProviderProps) {

    const [isDarkMode, setIsDarkMode] = useState(false)

    
    function toggleDarkMode() {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <DarkModeContext.Provider 
            value={{
                isDarkMode,
                toggleDarkMode
                } }>

            {children}
        </DarkModeContext.Provider>
    )
}