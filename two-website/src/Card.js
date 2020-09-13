import React from "react";

const Card = ({ title = "No Title", content = "No content", buttonName = "No name", imageLink = "No image" }) => (
    <div className="card" style={{ width: "18rem" }}>
        <img
            src={imageLink}
            className="card-img-top"
            alt="..."
        />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
                {content}
            </p>
            <a href="#" className="btn btn-success">{buttonName}</a>
        </div>
    </div>
)

export default Card;