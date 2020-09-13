import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const currentThem = AppTheme[theme];
    return (
        <div    
            style={{
                backgroundColor: `${currentThem.backgroundColor}`,
                border: `${currentThem.border}`,
                color: `${currentThem.textColor}`,
                textAlign: "center"
            }}
        >
            <h1 >Body section</h1>
            <p>Just the body of the app</p>
        </div>
    )
};

export default HeroSection;