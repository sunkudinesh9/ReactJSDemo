import React from "react";
import Portfolio from "./PortFolio"
import cabin from "./../assets/img/portfolio/cabin.png"
import cake from "./../assets/img/portfolio/cake.png"
import circus from "./../assets/img/portfolio/circus.png"
import game from "./../assets/img/portfolio/game.png"
import safe from "./../assets/img/portfolio/safe.png"
import submarine from "./../assets/img/portfolio/submarine.png"

const PortFolioSection = () => (
    <section className="page-section portfolio" id="portfolio">
        <div className="container">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row">
                <Portfolio imagelink={cabin} datatarget="#portfolioModal1" />
                <Portfolio imagelink={cake} datatarget="#portfolioModal2" />
                <Portfolio imagelink={circus} datatarget="#portfolioModal1" />
                <Portfolio imagelink={game} datatarget="#portfolioModal1" />
                <Portfolio imagelink={safe} datatarget="#portfolioModal1" />
                <Portfolio imagelink={submarine} datatarget="#portfolioModal1" />
            </div>
        </div>
    </section>
)

export default PortFolioSection;