import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import { Login } from '../components/auth/Login'
import { DashBoard } from './DashBoard'

export const AppRouter = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/auth/login" element={<Login/>}/>
              <Route path="/*" element={<DashBoard/>}/>
          </Routes>
      </BrowserRouter>
)
}
