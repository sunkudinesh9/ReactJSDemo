import React, { useContext } from "react";
import ThemeContext from "./../context/ThemeContext";
import { Button } from "reactstrap"

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    return (
        <div>
            <Button onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light")
            }}>
                {themeMode === "light" ? "dark" : "light"}
            </Button>
        </div>
    )
}

export default ThemeToggler;