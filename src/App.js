// import {useState } from "react";
// import Practice2 from "./Practice2";
// import Axios from 'axios';


// // code snippets for day1 of react practice
// function SuperHero(){

//   const [hero,setHero] = useState(["Shaktiman", " ironman", "hulk"])

//   const [name,setName] = useState( ()=> "antman")

//   const onAddName = () => {
//     setHero([...hero , name])
//     setName("")
//   }

//   return (
//     <div> 
//       <ul>
//         {hero.map((h)=> (
//           <li key={h}>{h}</li>
//         ))}
//       </ul>
//       <input 
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button
//         onClick={onAddName}
//       >Add Value</button>
//     </div>
//   )
// }

// function Counter(){
//   let [count , setCount] = useState(0);
  
//   function oneUp(){
//    return count>=10 ? "": setCount(count + 1); 
//   }

//   function oneDown(){
//     return count<=0 ? "": setCount(count - 1);
//   }

//   return(
//     <div> 
//       <button 
//       onClick={oneUp}
//       >+</button>
//       <h1>{count}</h1>
//       <button
//         onClick={oneDown}
//       > - </button>
//     </div>
//   )
// }

function Card(){
  
  return (
    <section 
      className="h-96 w-96 m-auto group [perspective:900px]" 
      aria-label="Card"
    >
      <div className=" h-full w-full rounded-xl shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        <div className="absolute  bg-slate-200 text-white rounded-lg inset-0">
          <img src="https://cdn.pixabay.com/photo/2020/02/07/12/54/emoji-4827091_1280.png" alt="" className="h-full w-full shadow-xl shadow-black/80 "/>
        </div>
        <div className="absolute bg-slate-50 text-white rounded-lg inset-0">
          <img 
          src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" className="h-full w-full object-cover shadow-xl rounded-lg shadow-black/80 "/>
        </div>

      </div>
    </section>
  )
}



function App() {
  // From here practice2 code start
  // const [details, setDetails] = useState({})
  // const fetchDetails = async () => {
  //   const {data} = await Axios.get('https://randomuser.me/api')
  //   console.log("RESPONCE",data);

  //   const details = data.results[0]
  //   setDetails(details)
  // }

  // let list = ["kaushik","is","a","good","guy"];

  // useEffect(() => {
  //   fetchDetails();
  // },[])

  return (
    <>
      <h1>hello to react</h1>
      <Card />
    </>
  );
}

export default App;