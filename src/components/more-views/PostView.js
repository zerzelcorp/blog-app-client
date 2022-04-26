import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const PostView = () => {

// const api_url=`http://localhost:3100/post/${_id}`

const id = useParams()

console.log(id)

  // const [post, setPost] = useState([])
  
  // useEffect(() => {
  // getData(api_url)
  // .then(data=>{
  //   setPost(data.data.res)
  //   console.log(posts)
  // })
  // }, [api_url])

  return (

<div className='container-fluid h-auto d-flex flex-column gap-3 justify-content-center'>
<h2>Post</h2>
{/* {
post?.map(p=>(
  <Post key={p._id} {...p}/>
))
} */}

<div className='d-flex flex-column gap-3'>
<form className='container-sm w-50 m-3 d-flex flex-column gap-3 border shadow m-2'>
<textarea class="form-control" rows="3"></textarea>
<button type="submit" className='btn btn-primary'>Comment</button>
</form>

</div>
    </div>
  )
}
