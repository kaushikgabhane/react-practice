import { useState } from "react";

function SuperHero(){

  const [hero,setHero] = useState(["Shaktiman", " ironman", "hulk"])

  const [name,setName] = useState( ()=> "antman")

  const onAddName = () => {
    setHero([...hero , name])
    setName("")
  }

  return (
    <div> 
      <ul>
        {hero.map((h)=> (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={onAddName}
      >Add Value</button>
    </div>
  )
}

function Counter(){
  let [count , setCount] = useState(100);
  
  function oneUp(){
    setCount(count + 1)
  }

  function oneDown(){
    setCount(count - 1)
  }

  return(
    <div> 
      <button 
      onClick={oneUp}
      >+</button>
      <h1>{count}</h1>
      <button
        onClick={oneDown}
      > - </button>
    </div>
  )
}

function App() {


  return (
    <>
      <h1>hello to react</h1>
      <Counter />
      <SuperHero />

    </>
  );
}

export default App;