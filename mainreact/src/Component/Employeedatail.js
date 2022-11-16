import {React,useState} from 'react';

const Employeedatail = () => {
    const [Detail, setDetail] = useState({
        firstname:"",
        lastname:"",
        email:"",
        mobileNo:"",
        city:"",
        state:"",
        age:""
    });

    const firstnameHandler = (e) =>{
        setDetail({...Detail,firstname:e.target.value})
    }
    const lastnameHandler = (e) =>{
        setDetail({...Detail,lastname:e.target.value})
    }
    const emailHandler = (e) =>{
        setDetail({...Detail,email:e.target.value})
    }
    const mobilenoHandler = (e) =>{
        setDetail({...Detail,mobileNo:e.target.value})
    }
    const cityHandler = (e) =>{
        setDetail({...Detail,city:e.target.value})
    }
    const stateHandler = (e) =>{
        setDetail({...Detail,state:e.target.value})
    }
    const ageHandler = (e) =>{
        setDetail({...Detail,age:e.target.value})
    }


    const Datasubmit = (e) =>{
        e.preventDefault()
        console.log(Detail);
    }
    return (
        <div>
            <form onSubmit={Datasubmit}>

                <input type="text" name="firstname"  onChange={firstnameHandler}/>
                <input type="text" name="lastname"  onChange={lastnameHandler}/>
                <input type="text" name="email"  onChange={emailHandler}/>
                <input type="text" name="mobileNo"  onChange={mobilenoHandler}/>
                <input type="text" name="city"  onChange={cityHandler}/>
                <input type="text" name="state"  onChange={stateHandler}/>
                <input type="text" name="age"  onChange={ageHandler}/> 

                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
}

export default Employeedatail;
