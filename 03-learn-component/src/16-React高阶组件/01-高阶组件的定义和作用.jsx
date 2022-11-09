import React, { PureComponent } from 'react'

// 定义高阶组件
function hoc(Cpn) {
	// 定义类组件
	class NewCpn extends PureComponent {
		render() {
			return (
				<Cpn name="zzt" />
			)
		}
	}
	return NewCpn

	// 定义函数式组件
	/* function NewCpn2() {
		return (
			<div>NewCpn2</div>
		)
	}
	return NewCpn2 */
}

class HelloWorld extends PureComponent {
	render() {
		return (
			<div>HelloWorld：name-{this.props.name}</div>
		)
	}
}

const HelloWorldHOC = hoc(HelloWorld)

export class App extends PureComponent {
	render() {
		return (
			<HelloWorldHOC />
		)
	}
}

export default App
