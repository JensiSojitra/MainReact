import React from 'react'
import { useEffect,useState } from 'react';

export default function Task() {

  const [data, setdata] = useState([]);

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(r=>r.json())
   .then(r=>{setdata(r)})
  }, []);
  
  const handler = (e) =>{
    setdata(e.target.value)
  }

  const Click = () =>{

  }

  return (
    <div>
      <input type="text" onChange={handler} value={data} />
      <button onClick={Click}>Search</button>

      {data.filter((value,index,array)=>{
        return(value.name.indexOf(data) <=0)
      })

      .map((value)=>{
        return(<h5>{value.name}</h5>)
        
      })}
    </div>
  )
}
