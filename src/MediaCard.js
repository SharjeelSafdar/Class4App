import React from 'react';
import './MediaCard.css';

const MediaCard = ({title, body, imageURL}) => (
    <div className="mediaCard">
        <img src={imageURL} alt=""/>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
)

export default MediaCard;