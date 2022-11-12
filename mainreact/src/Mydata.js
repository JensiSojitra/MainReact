import React from 'react'
import reviews from './Data'
import { useState } from 'react';

export default function Mydata() {
    const [Input, setInput] = useState();

    const Handler = (e) => {
        setInput(e.target.value)
    }

    const Show = () => {

    }

    return (


        <div>
            <input type="text" onChange={Handler} value={Input} />

            <button onClick={Show}>Click</button>

            {reviews.filter((value, index, array) => {
                return (value.name.indexOf(Input) >= 0)
            })
            .map((value, index, array) => {
                return (<h2>{value.name}</h2>)
            })}

        </div>

    )
}

