import React from 'react'
import { useEffect, useState } from 'react';
import './Task1.css'

export default function Task() {

  const [data, setdata] = useState([]);
  const [search, setsearch] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(r => { setdata(r) })
  }, []);

  const handler = (e) => {
    setsearch(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={handler} value={search} />
      {/* <button onClick={Click} >Search</button><br /><br /> */}

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((value, index, array) => {
            return (value.name.indexOf(search) >= 0)
          }).map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.username}</td>
                </tr>
              )
            })}
        </tbody>
      </table>

    </div>
  )
}

