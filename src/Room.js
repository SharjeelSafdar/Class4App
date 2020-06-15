import React, {useState} from 'react';
import './Room.css';

const Room = function () {
  const [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(24);
  return (
    <div className={`room ${isLit ? 'lit' : 'dark'}`}>
      <h1>Room</h1>
      {/* Room Light Status */}
      <p>The room is {isLit ? "lit" : "dark"}.</p>
      <button onClick={()=>setLit(true)}>Turn On</button>
      <button onClick={()=>setLit(!isLit)}>Toggle</button>
      <button onClick={()=>setLit(false)}>Turn Off</button>

      {/* Room Temperature */}
      <br/><br/>
      <p>The room temperature is</p>
      <button onClick={() => setTemp(temp+1)}>+</button>
      {temp} <sup>o</sup>C
      <button onClick={() => setTemp(temp-1)}>-</button>
    </div>
  )
}

export default Room;
