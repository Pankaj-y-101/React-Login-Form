import React,{useState} from 'react';
import './Form.css';

const FormSignup =() =>{
const [userRegistration, setuserRegistration]= useState({
    username:"",
    email:"",
    phone:"",
    password:""
});

const [record, setRecords]=useState([]);
const handleInput =(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);

    setuserRegistration({... userRegistration, [name]:value})
}
const handleSubmit=(e)=>{
    e.preventDefault();
    const newRecord={... userRegistration, id : new Date().getTime().toString()}
    console.log(record);
    setRecords([... record,newRecord]);
    console.log(record);
    setuserRegistration({username:"",email:"",phone:"",password:""});
}
    return(
<div className="form-right-content" action="" onSubmit={handleSubmit}>
    <form className="form">
        <h1>Please fill below form to get start</h1>
        <div className="form-input">
            <label htmlfor="username" className="form-label">User Name:</label>
            <input id="username" type="text" autoComplete="off" 
            value={userRegistration.username}
            onChange={handleInput} name="username" className="input"
            placeholder="Enter your name" />
            
        </div>
        <div className="form-input">
            <label htmlfor="email" className="form-label">E-mail:</label>
            <input id="email" type="text" autoComplete="off" 
            value={userRegistration.email}
            onChange={handleInput} name="email" className="input"
            placeholder="Enter your E-mail" />
        </div>
        <div className="form-input">
            <label htmlfor="phone" className="form-label">Phone:</label>
            <input id="phone" type="text" autoComplete="off" 
            value={userRegistration.phone}
            onChange={handleInput} name="phone" className="input"
            placeholder="Enter your phone" />
        </div>
        <div className="form-input">
            <label htmlfor="password" className="form-label">Password:</label>
            <input type="text" autoComplete="off" 
            value={userRegistration.password}
            onChange={handleInput} name="password" className="input"
            placeholder="Enter your password" />
             </div>
             
        <button type="submit" className="form-input-btn">Sign Up</button>
    </form>
    <div>
        {record.map((curElement)=>{
            return (
                <div className="showDataStyle">
                    <p>{curElement.username}</p>
                    <p>{curElement.email}</p>
                    <p>{curElement.phone}</p>
                    <p>{curElement.password}</p>
        </div>
            )
          })
        }
        </div>
 </div>
 );

}
export default FormSignup;