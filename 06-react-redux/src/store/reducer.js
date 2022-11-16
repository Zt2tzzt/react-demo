import * as actionType from "./constancs";

const initialState = {
	counter: 100
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionType.ADD_NUMBER:
			return { ...state, counter: state.counter + action.count }
		case actionType.SUB_NUMBER:
			return { ...state, counter: state.counter - action.count}
		default:
			return state;
	}
}

export default reducer