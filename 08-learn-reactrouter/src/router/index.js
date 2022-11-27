import Detail from '../pages/Detail'
import Home from '../pages/Home'
import HomeRanking from '../pages/HomeRanking'
import HomeRecommend from '../pages/HomeRecommend'
import HomeSongMenu from '../pages/HomeSongMenu'
import NotFound from '../pages/NotFound'
// import Category from '../pages/Category'
// import Order from '../pages/Order'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'
import React from 'react'

const Category = React.lazy(() => import('../pages/Category'))
const Order = React.lazy(() => import('../pages/Order'))

const routes = [
	{
		path: '/',
		element: <Navigate to="/home" />
	},
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: '/home',
				element: <Navigate to="/home/recommend" />
			},
			{
				path: '/home/recommend',
				element: <HomeRecommend />
			},
			{
				path: '/home/ranking',
				element: <HomeRanking />
			},
			{
				path: '/home/songmenu',
				element: <HomeSongMenu />
			}
		]
	},
	{
		path: '/category',
		element: <Category />
	},
	{
		path: '/order',
		element: <Order />
	},
	{
		path: '/detail/:id',
		element: <Detail />
	},
	{
		path: '/user',
		element: <User />
	},
	{
		path: '*',
		element: <NotFound />
	}
]

export default routes
