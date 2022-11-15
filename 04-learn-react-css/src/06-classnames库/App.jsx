import React, { PureComponent } from 'react'
import classnames from 'classnames';

export class App extends PureComponent {
	constructor() {
		super()
		this.state = {
			isbbb: true,
			isccc: true
		}
	}
	render() {
		const { isbbb, isccc } = this.state
		return (
			<div>
				<h2 className={classnames('aaa', {bbb: isbbb, ccc: isccc})}>哈哈哈</h2>
				<h2 className={classnames(['aaa', {bbb: isbbb, ccc: isccc}])}>嘻嘻嘻</h2>
			</div>
		)
	}
}

export default App