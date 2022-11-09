import React, { Fragment, PureComponent } from 'react'

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			sections: [
				{ title: '哈哈哈', content: '我是内容，哈哈哈' },
				{ title: '呵呵呵', content: '我是内容，呵呵呵' },
				{ title: '嘿嘿嘿', content: '我是内容，嘿嘿嘿' },
				{ title: '吼吼吼', content: '我是内容，吼吼吼' }
			]
		}
	}
	render() {
		const { sections } = this.state

		return (
			<>
				<h2>我是 App 的标题</h2>
				{
					sections.map(item => (
						<Fragment key={item.title}>
							<h2>{item.title}</h2>
							<p>{item.content}</p>
						</Fragment>
					))
				}
			</>
		)
	}
}

export default App