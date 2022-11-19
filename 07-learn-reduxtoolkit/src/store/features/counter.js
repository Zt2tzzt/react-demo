import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'couter',
	initialState: {
		counter: 888
	},
	reducers: {
		addNumber(state, action) {
			console.log(action.type, action.payload)
			// couter/addNumber 5
			state.counter = state.counter + action.payload
		},
		subNumber(state, action) {
			state.counter = state.counter - action.payload
		}
	}
})
export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer