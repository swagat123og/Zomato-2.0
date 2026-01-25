import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserRegister from '../pages/UserRegister'
import UserLogin from '../pages/UserLogin'
import FoodPartnerRegister from '../pages/PartnerRegister'
import FoodPartnerLogin from '../pages/PartnerLogin'
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/user/register' element={<UserRegister />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/food-partner/register' element={<FoodPartnerRegister />} />
        <Route path='/food-partner/login' element={<FoodPartnerLogin />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
