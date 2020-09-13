import React, { useState } from "react";
import "./../css/App.css"
import Sidebar from "./SideBar"
import Coin from "./../images/coin.jpg"

import {Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
    return (
        <div styles={{ backgroundImage:`url(${Coin})` }}>
            <Container fluid >
                <h1 className="text-danger">
                    <b>Numismatics Hub</b>
                </h1>
                <Sidebar />
            </Container>
        </div>

    )
}

export default App;