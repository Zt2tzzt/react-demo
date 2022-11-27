import React from 'react'
import { useNavigate, Link, useRoutes } from 'react-router-dom';
import routes from './router';

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
          <Link to='/user?name=zzt&age=18'>用户</Link>
        </div>
        <hr />
      </div>
      <div className="content">
        { useRoutes(routes) }
      </div>
      <div className="footer">
        <hr />
        footer
      </div>
    </div>
  )
}

export default App