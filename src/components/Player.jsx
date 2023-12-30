import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState();
  const [submit, setSubmit] = useState(false);

  function handleChange(event){
    setSubmit(false);
    setPlayerName(event.target.value);
  }

  function handleSubmit(){
    setSubmit(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submit ? playerName: 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName}/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
