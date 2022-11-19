import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidateAction = createAsyncThunk('home/multidata', async (payload, { dispatch, getState }) => {
	console.log('payload:', payload)
	// payload: {name: 'zzt', age: 18}

	// 1. 发送网络请求
	const res = await axios.get("http://123.207.32.32:8000/home/multidata")
	// 2. 返回结果，action 变为 fullfilled 状态
	return res.data
})

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		banners: [],
		recommends: []
	},
	reducers: {
		// 如果在组件中派发 action，在 action 中发送网络请求，组需要使用 extraReducers
		// 如果在组件中直接发送网络请求，需要使用这种方式来同步的修改 state，
		changeBanners(state, { payload }) {
			state.banners = payload
		},
		changeRecommends(state, { payload }) {
			state.recommends = payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchHomeMultidateAction.pending, (state, action) => {
				console.log('fetchHomeMultidateAction pending')
			})
			.addCase(fetchHomeMultidateAction.fulfilled, (state, { payload }) => {
				state.banners = payload.data.banner.list
				state.recommends = payload.data.recommend.list
			})
			.addCase(fetchHomeMultidateAction.rejected, (state, action) => {
				console.log('fetchHomeMultidateAction rejected')
			})
	}
})

export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer