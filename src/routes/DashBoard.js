import React from 'react'
import { Routes,Route} from 'react-router-dom'
import { Home } from '../components/home/Home'
import { NavBar } from '../components/nav/NavBar'
import { Account } from '../components/profile/Account'
import { Profile } from '../components/post/Profile'
import { PostView } from '../components/more-views/PostView'

export const DashBoard = () => {
  return (
<>
    <NavBar/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="account" element={<Account name="Carlos45"/>}/>
        <Route path="post/:id" element={<PostView/>}/>
    </Routes>
</>
  )
}
