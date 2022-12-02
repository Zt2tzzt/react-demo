import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 99,
		msg: 'Hello World'
	},
	reducers: {
		addNumberAction(state, { payload }) {
			state.count = state.count + payload
		},
		subNumberAction(state, { payload }) {
			state.count = state.count - payload
		},
		changeMsgAction(state, { payload }) {
			console.log(payload)
			state.msg = payload
		}
	}
})

export const { addNumberAction, subNumberAction, changeMsgAction } = counterSlice.actions
export default counterSlice.reducer