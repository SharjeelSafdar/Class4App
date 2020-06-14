import React from 'react';
import './Gate.css';

const Gate = ({isOpen}) => (
    <p className="Gate">The Gate is {isOpen ? "open" : "closed"}.</p>
)

export default Gate;