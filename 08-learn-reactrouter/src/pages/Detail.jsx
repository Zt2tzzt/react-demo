import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class Detail extends PureComponent {
	render() {
		const { params } = this.props.router
		return (
			<div>
				<h1>Detail Page</h1>
				<div>id: {params.id}</div>
			</div>
		)
	}
}

export default withRouter(Detail)