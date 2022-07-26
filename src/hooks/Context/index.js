import React, { useState, createContext } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }){
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if(theme === 'light'){
            return setTheme('dark');
        }
        return setTheme('light');
    };

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}
