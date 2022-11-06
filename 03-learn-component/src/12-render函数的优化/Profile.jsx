import React, { memo } from 'react'

const Profile = memo((props) => {
	console.log('profile render');
	return (
		<h2>Profile： { props.msg }</h2>
	)
})

export default Profile