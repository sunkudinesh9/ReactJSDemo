import React from "react";
import { FaTimes, FaRegCircle, FaCircle, FaPen } from "react-icons/fa"

const Icon = ({ shap }) => {
    switch (shap) {
        case "cross":
            return (<FaTimes />);
        case "circle":
            return (<FaRegCircle />);
        default:
            return (<FaPen />);
    }
}

export default Icon;