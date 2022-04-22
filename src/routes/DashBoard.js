import React from 'react'
import { Routes,Route} from 'react-router-dom'
import { Home } from '../components/home/Home'
import { NavBar } from '../components/nav/NavBar'
import { Post } from '../components/post/Post'
import { Account } from '../components/profile/Account'
import { Profile } from '../components/profile/Profile'

export const DashBoard = () => {
  return (
<>
    <NavBar/>
    <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="myprofile" element={<Profile/>}/>
        <Route path="account" element={<Account name="Carlos45"/>}/>
        <Route path="/post/:id" element={<Post/>}/>
    </Routes>
</>
  )
}
