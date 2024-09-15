import { useState } from 'react'
import DisplayComponent from './component/displayComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increment = () =>{
    setCount(count+1);
  }
  const decrement =()=>{
    setCount(count-1);
  }
  let displayComponent;
  if(count>=5){
    displayComponent = <button onClick={decrement}>subtract</button>
  }
  else{
    displayComponent = null;
  }
  return (
    <>
    <button onClick={increment}>add</button>
    
    <DisplayComponent count = {count}/>
    {displayComponent}
    </>
  )
}

export default App