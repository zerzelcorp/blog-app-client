import React,{useState,useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { getData } from "../../helpers/getData";
import "../../index.css";
import { Footer } from "../footer/Footer";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../post/Post";

export const Home = () => {

// const {data,loading,error} = useFetch('http://localhost:3100/posts/')

// console.log("home data:",data)
// console.log("home loading:",loading)

 const api_url='http://localhost:3100/posts/'

 const [posts, setPosts] = useState([])

 useEffect(() => {
 getData(api_url)
 .then(data=>{
   setPosts(data.data.res)
 })
 }, [api_url])


  return (
  <div id="home" className="d-flex w-100 h-auto flex-row animate__animated animate__fadeIn">
      <div className="border bg-light bg-gradient w-75 h-100  d-flex flex-column g-3">
  <h3 className="text-center m-3">BloggerTrotter</h3>

 {
 posts?.map(p=>(
    <Post key={p._id}{...p}/>
  ))
} 

  </div>

<div className="d-flex flex-column gap-3 w-25 h-auto text-center border">

    <div className="list-group">
{
  posts?.map(sb=>(
    <Link to={`/post/${sb._id}`} className="list-group-item list-group-item-action">
        {sb.title}
    </Link>
  ))
}
          </div>
        </div>
  </div>
  );
};
