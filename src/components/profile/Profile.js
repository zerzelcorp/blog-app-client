import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Post } from '../post/Post'

export const Profile = () => {

const navigate= useNavigate()

const makePost =(e)=>{
e.preventDefault()
navigate("/home")
  }

  return (
    <>
<div id="profile" className='d-flex flex-column gap-3 w-100 h-auto border shadow animate__animated animate__fadeIn'>

<div className='border shadow d-flex flex-column align-items-center justify.content-center m-2'>
<form className="container-sm w-50 m-3 d-flex flex-column gap-3">
<h6 className='text-center'>Post About Something!</h6>
    <input className='form-control' type="text" placeholder='Post title..'/>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button type="submit" onClick={makePost} className='btn btn-primary w-100'>Post</button>
</form>
</div>

  <h5 className='text-center'>My Posts</h5>

<div className='d-flex flex-column align-items-center justify-content-center w-75 m-auto'>
<Post 
  author="you" 
  title="La musica interestellar" 
  description="security standards that protect information in the health care industry. HIPAA violations can lead to civil penalties and fines depending on severity. Certain types of violations can also result in criminal penalties, which may include prison time"
  date="hace 10 horas"
  />

<Post 
  author="you" 
  title="La filosofia en otras galaxias" 
  description="security standards that protect information in the health care industry. HIPAA violations can lead to civil penalties and fines depending on severity. Certain types of violations can also result in criminal penalties, which may include prison time"
  date="hace 10 horas"
  />
  
</div>
</div>
    </>

  )
}
