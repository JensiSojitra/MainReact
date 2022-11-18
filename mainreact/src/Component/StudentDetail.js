import { React, useState } from 'react';
import './Useeffect/Task1.css'

const StudentDetail = () => {
    const [data, setdata] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        email: "",
        mobile: "",
        birthdate: "",
        course: "",
        gender: "",
        enrollment: "",
        address: ""
    });

    // const firstHandler = (r) => {
    //     setdata({...data, firstname: r.target.value })
    // }
    // const middleHandler = (r) => {
    //     setdata({ ...data, middlename: r.target.value })
    // }
    // const lastHandler = (r) => {
    //     setdata({ ...data, lastname: r.target.value })
    // }
    // const emailHandler = (r) => {
    //     setdata({ ...data, email: r.target.value })
    // }
    // const mobileHandler = (r) => {
    //     setdata({ ...data, mobile: r.target.value })
    // }
    // const birthHandler = (r) => {
    //     setdata({ ...data, birthdate: r.target.value })
    // }
    // const courseHandler = (r) => {
    //     setdata({ ...data, course: r.target.value })
    // }
    // const genderHandler = (r) => {
    //     setdata({ ...data, gender: r.target.value })
    // }
    // const enrollmentHandler = (r) => {
    //     setdata({ ...data, enrollment: r.target.value })
    // }
    // const addressHandler = (r) => {
    //     setdata({ ...data, address: r.target.value })
    // }

    const Handler = (e) =>{
        
        setdata({...data,[e.target.name]:e.target.value})
    }

    const datasubmit = (r) => {
        r.preventDefault();
        console.log(data);
    }

    return (
        <div className="mainstudent">
            <div className='studentform-background'>
                <h3 style={{ textAlign: "center", fontWeight: 'bold' }}>Student Registration Form</h3><hr style={{ border: '2px solid white', backgroundColor: 'red' }} />
                <form action="#" onSubmit={datasubmit} autoComplete='off'>
                    <label htmlFor="">First Name:</label>
                    <input className="form-control" type="text" name="firstname" onChange={Handler} placeholder='Please enter First Name' /><br />

                    <label htmlFor="">Middle Name:</label>
                    <input className="form-control" type="text" name="middlename" onChange={Handler} placeholder='Please enter Middle Name' /><br />

                    <label htmlFor="">Last Name:</label>
                    <input className="form-control" type="text" name="lastname" onChange={Handler} placeholder='Please enter Last Name' /><br />

                    <label htmlFor="">Email:</label>
                    <input className="form-control" type="email" name="email" onChange={Handler} placeholder='Please enter Email Address' /><br />

                    <label htmlFor="">Mobile no:</label>
                    <input className="form-control" type="text" name="mobile" onChange={Handler} placeholder='Please enter Mobile Number' /><br />

                    <label htmlFor="">Birth date:</label>
                    <input className="form-control" type="date" name="birthdate" onChange={Handler} /><br />

                    <label>Course :</label>
                    <select className='form-select' onChange={Handler} name='course'>
                        <option value="Course">Course</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="MBA">MBA</option>
                        <option value="MCA">MCA</option>
                        <option value="M.Tech">M.Tech</option>
                    </select><br />
                    <label> Gender : </label>
                    <select className='form-select' onChange={Handler} name='gender'>
                        <option value="Select">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select><br />

                    <label htmlFor="">Enrollment Number:</label>
                    <input className="form-control" type="text" name="enrollment" onChange={Handler} placeholder='Please enter Enrollment Number' /><br />

                    <label htmlFor="">Address:</label><br />
                    <textarea name="address" id="" rows="4" className='form-control' onChange={Handler} /> <br />

                    <input className="form-control" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default StudentDetail;
