import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { Register } from '../components/auth/Register'
import { NotFound } from '../components/more-views/NotFound'
import { DashBoard } from './DashBoard'

export const AppRouter = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Register/>}/>             
              <Route path="/*" exact element={<DashBoard/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
)
}
