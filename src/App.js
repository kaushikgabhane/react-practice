import { useEffect, useState } from "react";
import Practice2 from "./Practice2";
import Axios from 'axios';


// code snippets for day1 of react practice
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
  let [count , setCount] = useState(0);
  
  function oneUp(){
   return count>=10 ? "": setCount(count + 1); 
  }

  function oneDown(){
    return count<=0 ? "": setCount(count - 1);
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
  // From here practice2 code start
  const [details, setDetails] = useState({})
  const fetchDetails = async () => {
    const {data} = await Axios.get('https://randomuser.me/api')
    console.log("RESPONCE",data);

    const details = data.results[0]
    setDetails(details)
  }

  let list = ["kaushik","is","a","good","guy"];

  useEffect(() => {
    fetchDetails();
  },[])

  return (
    <>
      <h1>hello to react</h1>
      <Counter />
      <SuperHero />
      <Practice2 myname='kaushik' list= {list} details={details}/>
      <button
        onClick={fetchDetails}
      >get details</button>

    </>
  );
}

export default App;