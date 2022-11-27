import React, { PureComponent } from 'react'
import withRouter from '../hoc/withRouter'

export class User extends PureComponent {
	render() {
		const { router } = this.props
		const query = router.query

		return (
			<div>
				<h1>User Page</h1>
				<div>{query.name}-{query.age}</div>
			</div>
		)
	}
}

export default withRouter(User)