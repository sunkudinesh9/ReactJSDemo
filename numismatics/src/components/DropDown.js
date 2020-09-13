import React, { useState } from "react"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { Card, CardBody, Container, Button, Col, Row, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const DropDown = () => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Country
            </DropdownToggle>
            <DropdownMenu className="bg-warning">
                <DropdownItem ><b>India</b></DropdownItem>
                <DropdownItem><b>USA</b></DropdownItem>
                <DropdownItem><b>UAE</b></DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default DropDown;