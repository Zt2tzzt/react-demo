import React from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'

function withRouter(WrapperComponent) {
	return function (props) {
		// 导航
		const navigate = useNavigate()

		// 动态路由的参数：/detail/:id
		const params = useParams()
		
		// 查询字符串的参数：/user?name=zzt&age=18
		const location = useLocation()
		console.log('location:', location) // {pathname: '/user', search: '?name=zzt&age=18', hash: '', state: null, key: '1k1r7ie4'}
		const [searchParams] = useSearchParams()
		const query = Object.fromEntries(searchParams)
		console.log('query:', query); // {name: 'zzt', age: '18'}

		const router = { navigate, params, location, query }

		return <WrapperComponent {...props} router={ router } />
	}
}

export default withRouter