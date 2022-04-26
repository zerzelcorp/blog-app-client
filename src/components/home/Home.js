import React,{useState,useEffect} from "react";
import { Link, Outlet } from "react-router-dom";
import { getData } from "../../helpers/getData";
import "../../index.css";
import { Footer } from "../footer/Footer";
import { Post } from "../post/Post";

export const Home = () => {

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

        <Link to='#' className="list-group-item list-group-item-action">
              Filosofia
        </Link>

        <a href="#" className="list-group-item list-group-item-action">
              Matematicas en la vida
        </a>

        <a href="#" className="list-group-item list-group-item-action">
              la musica hoy
        </a>

        <a
          href="#"
          className="list-group-item list-group-item-action"
          tabindex="-1"
          >
            Vestimenta otoño 2022
        </a>

          </div>
        </div>
  </div>
  );
};
