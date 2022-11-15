const { CHANGE_NAME, ADD_LEVEL } = require('./constans')

const changeNameAction = name => ({
	type: CHANGE_NAME,
	name
})
const changeLevelAction = count => ({
	type: ADD_LEVEL,
	count
})

module.exports = {
	changeNameAction,
	changeLevelAction
}