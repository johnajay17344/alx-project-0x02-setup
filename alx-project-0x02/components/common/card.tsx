import React from "react";
import { CardProps } from "../../interfaces";
const Card: React.FC<CardProps> = ({ title, content, footer }) => {
    return (
        <div className="card"> 
            <h2>{title}</h2>
            <p>{content}</p>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
}
export default Card;