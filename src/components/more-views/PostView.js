import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getData } from '../../helpers/getData'
import { SinglePost } from '../post/SinglePost'

export const PostView = () => {

const {id} = useParams()

const api_url=`http://localhost:3100/post/${id}`

const [post, setPost] = useState([])

useEffect(() => {
window.scrollTo({
  top:0,
  behavior:"smooth"
})
}, [])


 useEffect(() => {
 getData(api_url)
  .then(data=>{
   setPost(data.data.res)
 })
}, [api_url])

console.log("state",post)

  return (

<div 
id="singlepost" 
className='container-fluid d-flex flex-column'>

 {
   post?
  <SinglePost key={post._id} {...post}/>
  :''
} 

{/* <div className='d-flex flex-column w-100 gap-3'>
  <form className='container-sm w-50 m-3 d-flex flex-column gap-3 border shadow m-2'>  <textarea class="form-control" rows="3"></textarea>
  <button type="submit" className='btn btn-primary'>Comment</button>
  </form> 
</div> */}

</div>
  )
}
