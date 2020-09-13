import React from "react";
import ThemeToggler from "../components/ThemeToggler"

const Header = () => {
    return (
        <header style={{
            textAlign: "center",
        }}>
            <h1>This Them toggler to switch light and dark thems</h1>
            <ThemeToggler />
        </header>
    )
};

export default Header;