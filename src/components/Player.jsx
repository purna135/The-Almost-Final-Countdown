import { useState, useRef } from "react";

export default function Player() {
  const name = useRef()

  const [playerName, setPlayerName] = useState("unknown entity");
  
  function handleSubmit() {
    setPlayerName(name.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={name} />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
