import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [length ,setLength] = useState(8);
  const [character,setcharacter] = useState(false);
  const [number , setNumber]= useState(false);
  const [Password ,setPassword] = useState("");

  const Passwordgenerator = useCallback(()=>{
    let pass = "";
    let  str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+= "0123456789";
    if(character) str+= "@#&*$!%?+=~^/\|_:"

    for(let i=1;i<length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass += str.charAt(char)
      setPassword(pass);
    }
  } ,[length,character,number,setPassword])
  

  useEffect(()=>{
    Passwordgenerator();
  } , [length,number,character,Passwordgenerator])

  const copytoclipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(Password);
  },[length,character,number])
 
 return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Password Generator
      </h1>

      {/* Password Display */}
      <div className="flex mb-4">
        <input
          type="text"
          readOnly
          placeholder="Generated Password"
          value={Password}
          className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md" onClick={copytoclipboard}>
          Copy
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <input type="range" min="6" max="30" value={length} onChange={(e)=>setLength(e.target.value)}/>
          <span>Length : {length}</span>
        </div>

        <label className="flex items-center gap-1">
          <input type="checkbox" defaultChecked = {number} onChange={()=>{setNumber((prev)=>!prev)}} />
          Numbers
        </label>

        <label className="flex items-center gap-1">
          <input type="checkbox" defaultChecked = {character} onChange={()=>{setcharacter((prev)=>!prev)}} />
          Characters 
        </label>
      </div>
    </div>
  </div>
);
}

export default App
