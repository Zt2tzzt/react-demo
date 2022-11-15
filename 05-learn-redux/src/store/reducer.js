const { CHANGE_NAME, ADD_LEVEL } = require('./constans')

const initialState = {
	name: 'zzt',
	level: 99
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.name } 
		case ADD_LEVEL:
			return { ...state, level: state.level + action.count }
		default:
			return state
	}
}

module.exports = reducer
