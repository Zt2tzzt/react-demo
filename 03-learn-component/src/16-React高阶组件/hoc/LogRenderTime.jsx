import React, { PureComponent } from 'react'

function LogRenderTime(OriginCpn) {
	return class extends PureComponent {
		UNSAFE_componentWillMount() {
			this.beginTme = Date.now()
		}
	
		componentDidMount() {
			this.endTime = Date.now()
			console.log('当前页面花费了', this.endTime - this.beginTme, 'ms 渲染完成')
		}

		render() {
			return <OriginCpn {...this.props} />
		}
	}
	
}

export default LogRenderTime