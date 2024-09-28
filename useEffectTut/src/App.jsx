import { useEffect, useState } from 'react'

import './App.css'
import useFetch from './assets/useFetch'
function App() {
  // const [data,setData] = useState()
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/')
  //     .then(response => response.json())
  //     .then(json => console.log(json)).catch((e)=>{
  //       console.log(e);
  //     })
  // },[setData])
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  return (
    <>
    <div>
      <h2> {data && data.title}</h2>
    </div>
    </>
  )
}

export default App
