import React ,{useState} from 'react'
import { Link } from 'react-router-dom'


export const Account = ({name}) => {

const [edit, setEdit] = useState(false)

const showEdit=()=>{
  setEdit(!edit)
}


  return (
<div id="account" className='container-md d-flex flex-column align-items-center gap-3 mt-4 border shadow text-dark animate__animated animate__fadeIn'>

<div className='container d-flex flex-column justify-content-center'>
   
   <h4 className='text-center mb-4 mt-2'>{name}</h4>

   <div className='d-flex justify-content-center align-items-center'>
   <img className='img-fluid rounded-circle shadow' src='avatar-alien.png' style={{height:140+"px",width:140+"px"}}/>
   </div>

<div className="animate__animated animate__fadeInUp container border shadow mt-4 d-flex flex-column justify-content-center gap-3">
     
     <h5 className='text-center m-3'>Edit</h5>

<div className="accordion" id="accordionExample">

  <div className="card text-center">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Change Email
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <form className='d-flex flex-column gap-3 p-3 justify-content-center'>
     <input className='form-control text-center' type="text" name="name" placeholder='New email...'/>
<button type="submit" className='btn btn-primary'>Save</button>
</form>
      </div>
    </div>
  </div>

  <div className="card text-center">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Change Name
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <form className='d-flex flex-column gap-3 p-3 justify-content-center'>
     <input className='form-control  text-center' type="text" name="name" placeholder='New name...'/>
<button type="submit" className='btn btn-primary'>Save</button>
</form>
      </div>
    </div>
  </div>

  <div className="card text-center">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Change Password
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      <form className='d-flex flex-column gap-3 p-3 justify-content-center'>
     <input className='form-control text-center' type="text" name="name" placeholder='New password...'/>
<button type="submit" className='btn btn-primary'>Save</button>
</form>
      </div>
    </div>
  </div>

</div>

</div>

<div className='d-flex justify-content-center align-items-center p-3 mt-3'>
   <Link className='btn btn-danger w-25' to="/auth/login">Delete account</Link>
</div>
</div>
</div>
  )
}
