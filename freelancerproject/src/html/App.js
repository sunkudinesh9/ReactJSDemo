import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import HeaderSection from "./HeaderSection";
import PortFolioSection from "./PortFolioSection";
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import FooterSection from "./FooterSection"
import PortfolioModels from "./PortfolioModels"
import styles from "./../css/styles.css"

const App = () => (
    <div>
        <Navigation />
        <HeaderSection />
        <PortFolioSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
    </div>
)

export default App;