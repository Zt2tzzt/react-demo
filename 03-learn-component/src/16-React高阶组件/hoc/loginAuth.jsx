const loginAuth = OriginCpn => props => {
	// 从 localStorage 中获取 token
	const token = localStorage.getItem('token')
	return token ? <OriginCpn {...props} />
		: <h2>请先登录，再进行跳转到对应的页面中</h2>
}

export default loginAuth