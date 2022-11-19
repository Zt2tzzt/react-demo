import { PureComponent } from 'react'
import { StoreContext } from './StoreContext'

export function connect(mapStateToProps, mapDispatchToProps) {
	// 返回一个高阶组件
	return function (OriginCpn) {
		return class extends PureComponent {
			static contextType = StoreContext // 就是 store

			constructor(props, context) {
				super(props)
				this.state = mapStateToProps(context.getState())
			}
			componentDidMount() {
				this.unSubscripbe = this.context.subscriibe(() => {
					this.setState(mapStateToProps(this.context.getState()))
				})
			}
			componentWillUnmount() {
				this.unSubscripbe()
			}
			render() {
				const stateObj = mapStateToProps(this.context.getState())
				const dispatchObj = mapDispatchToProps(this.context.dispatch)
				return <OriginCpn {...this.props} {...stateObj} {...dispatchObj} />
			}
		}
	}
}