import React,{useState} from "react";
import { postData } from "../../helpers/postData";

export const Register = () => {

const [values, setValues] = useState({name:'',email:'',password:''})

 const {name,email,password}= values


const signUp = (e)=>{

 e.preventDefault()
 if(values){
   postData(values)
  //  fetch(`http://localhost:3100/auth/register`,{
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //     method:"POST",
  //     body:JSON.stringify(values)
  //  })
  //  .then(res=>{
  //    res.json()
  //  })
  //  .then(data=>console.log('Success:',data))
  //  .catch(e=>{
  //    console.warn('Error:',e);
  //  });
 }
 }

  const handleChange = ({target})=>{
    setValues({
      ...values,
      [target.name]:target.value
    })
  }

  return (
    <div id="register" className="animate__animated animate__fadeIncontainer-fluid d-flex align-items-center justify-content-center p-2">
      
      <form 
      // action="http://localhost:3100/auth/register"
      method="post"
      className="d-flex flex-column gap-3 p-3 text-center w-75 border shadow m-auto">
        <h5>Sign up</h5>
        <input
          className="form-control text-center"
          type="text"
          name="name"
          value={name}
          onChange={handleOnChange}
          placeholder="name"
        />
        <input
          className="form-control text-center"
          type="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="E-mail"
        />
        <input
          className="form-control text-center"
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="*******"
        />
        <button
         type="submit" 
         className="btn btn-primary w-100"
         onClick={signUp}
         >
          Sign up
        </button>
      </form>
    </div>
  );
};
