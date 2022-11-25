import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Category from './pages/Category';
/* import Home from './pages/Home';
import HomeRanking from './pages/HomeRanking';
import HomeRecommend from './pages/HomeRecommend';
import NotFound from './pages/NotFound'; */
import Order from './pages/Order';

export function App() {

  const navigate = useNavigate()

  function navigateTo(path) {
    navigate(path)
  }

  return (
    <div>
      <div className="header">
        header
        <div className="nav">
          <button onClick={e => navigateTo('/category') }>分类</button>
          <span onClick={e => navigateTo('/order') }>订单</span>
        </div>
        <hr />
      </div>
      <div className="content">
        <Routes>
          {/* <Route path='/' element={<Navigate to='/home' />} /> */}
          {/* <Route path='/home' element={<Home />}> */}
            {/* 设置二级路由的重定向 */}
            {/* <Route path='/home' element={<Navigate to='/home/recommend' />} />
            <Route path='/home/recommend' element={<HomeRecommend />} />
            <Route path='/home/ranking' element={<HomeRanking />} /> */}
          {/* </Route> */}
          <Route path='/category' element={<Category />} />
          <Route path='/order' element={<Order />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </div>
      <div className="footer">
        <hr />
        footer
      </div>
    </div>
  )
}

export default App