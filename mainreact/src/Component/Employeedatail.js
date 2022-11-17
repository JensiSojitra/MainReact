import { React, useState } from 'react';

const Employeedatail = () => {
    const [Detail, setDetail] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobileNo: "",
        city: "",
        state: "",
        age: "",
        gender: "",
        hobbies: []
    });


    const myHandler = (e) => {

        if (e.target.name == "hobbies") {

            let mydata = Detail.hobbies;
            
            if (e.target.checked) {
                mydata.push(e.target.value)
                setDetail({ ...Detail, hobbies: mydata })
            }
            else {
                let mydata1 = mydata.filter((value) => {
                    return (
                        value != e.target.value
                    )
                })
                setDetail({ ...Detail, hobbies: mydata1 })
            }

        } else {
            setDetail({ ...Detail, [e.target.name]: e.target.value })
        }
    }

    const Datasubmit = (e) => {
        e.preventDefault()
        console.log(Detail);
    }
    return (
        <div>
            <form onSubmit={Datasubmit}>

                Firstname:<input type="text" name="firstname" onChange={myHandler} /><br />
                Lastname:<input type="text" name="lastname" onChange={myHandler} /><br />
                Email:<input type="text" name="email" onChange={myHandler} /><br />
                Mobile No:<input type="text" name="mobileNo" onChange={myHandler} /><br />
                City:<input type="text" name="city" onChange={myHandler} /><br />
                State:<input type="text" name="state" onChange={myHandler} /><br />
                Age:<input type="text" name="age" onChange={myHandler} /><br />

                <label>Gender:</label>
                <label>Male</label>
                <input type="radio" name="gender" value='male' onClick={myHandler} />
                <label>Female</label>
                <input type="radio" name="gender" value='female' onClick={myHandler} /><br />

                <label>Hobbies:</label>
                <label>Cricket</label>
                <input type="checkbox" name="hobbies" value='cricket' onClick={myHandler} />
                <label>Read Books</label>
                <input type="checkbox" name="hobbies" value='readbooks' onClick={myHandler} /><br />

                <input type="submit" value="Submit" />
            </form>

        </div>
    );
}

export default Employeedatail;
