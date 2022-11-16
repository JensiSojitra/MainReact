import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import reportWebVitals from './reportWebVitals';
import Home from './Component/Home';
import Mycounter from './Component/Mycounter';
import Magic from './Component/Magic';
import Mydata from './Component/Mydata'; 
import Scrollbar from './Component/Scrollbar';
import Mytask from './Component/Pages/Mytask';
import Fetch from './Component/Useeffect/Fetch';
import Task from './Component/Useeffect/Task1';
import Axios from './Component/Useeffect/Axios';
import DataAxios from './Component/Useeffect/Axios';
import Employeedatail from './Component/Employeedatail';
import StudentDetail from './Component/StudentDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Scrollbar />  */}
    {/* <Mycounter/> */}
    {/* <Magic/> */}
    {/* <Mydata/> */}
    {/* <Mytask/> */}
    {/* <Fetch/> */}
    {/* <Task/> */}
    {/* <DataAxios/> */}
    {/* <Employeedatail/> */}
    <StudentDetail/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
