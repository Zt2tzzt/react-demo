import { PureComponent } from 'react'

function enhanceUserInfo(OriginCpn) {
	class NewComponent extends PureComponent {
		constructor(props) {
			super(props)
			this.state = {
				userInfo: {
					name: 'zzt',
					level: 99
				}
			}
		}
		render() {
			return (
				<OriginCpn {...this.props} {...this.state.userInfo} />
			)
		}
	}

	return NewComponent
}

export default enhanceUserInfo