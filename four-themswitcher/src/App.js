import React, { useState } from 'react';
import ThemContext from "./context/ThemeContext"
import Header from "./components/Heder";
import HeroSection from "./components/HeroSection";

function App() {
  const themeHook = useState("light");
  return (
    <ThemContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemContext.Provider>
  )
}

export default App;
