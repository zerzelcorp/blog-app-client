import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate=useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()
    navigate('/home')
  }

  return (
    <div className="animate__animated animate__fadeIn container-fluid d-flex align-items-center justify-content-center p-2">
    <form className='d-flex flex-column gap-3 p-3 text-center w-75 border shadow m-auto'>
    <h5>Login</h5>
<input className="form-control text-center" type="email" name="email" placeholder='E-mail'/>
<input className="form-control text-center" type="password" name="password" placeholder='*******'/>
    <button type="submit" onClick={handleLogin} className='btn btn-primary w-100'>Login</button>

<a className='link'>Don't have an account?</a>

</form>
</div>
  )
}
