import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { postData } from '../../helpers/postData'
import { useForm } from '../hooks/useForm'
import { Post } from './Post'

export const Profile = () => {

const id= useParams()

console.log(id)


const initialForm ={author:'guest',title:'',description:''}

const [formValues,handleChange,formReset] = useForm(initialForm)

const {author,title,description} = formValues

const publicPost =(e)=>{
e.preventDefault()
try {
  postData('http://localhost:3100/profile-create-post',formValues)
} catch (error) {
  console.log("Error:",error)
}
formReset(initialForm)
}

  return (
    <>
<div id="profile" className='d-flex flex-column gap-3 w-100 h-auto border shadow animate__animated animate__fadeIn'>

<div className='border shadow d-flex flex-column align-items-center justify.content-center m-2'>

<form className="container-sm w-50 m-3 d-flex flex-column gap-3">
<h6 className='text-center'>Post About Something!</h6>
    <input className='form-control' type="text" value={title} onChange={handleChange} name="title" placeholder='Post title..'/>
    <textarea class="form-control" name="description" value={description} onChange={handleChange} rows="3" placeholder='...'></textarea>
    <button type="submit" onClick={publicPost} className='btn btn-primary w-100'>Post</button>
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
