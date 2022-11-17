import * as actionTypes from './constancs';
import axios from 'axios';

export const changeBannersAction = banners => ({
	type: actionTypes.CHANGE_BANNERS,
	banners
})

export const chnageRecommendsAction = recommends => ({
	type: actionTypes.CHANGE_RECOMMENDS,
	recommends
})

export const fetchHomeMultidataAction = () => {
	/**
	 * 如果是一个普通的 action，需要在此处返回一个 action 对象
	 * 但是，对象中不能直接拿到从服务器请求的异步数据
	 */

	// 如果返回一个函数，那么 redux 是不支持的，需要使用中间件。在中间件的加持下，dispatch 该函数后，该函数会自动执行。
	return function (dispatch, getState) {
		// 实现异步操作，网络请求。
		axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
			const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

			dispatch(changeBannersAction(banners))
			dispatch(chnageRecommendsAction(recommends))
		})
	}
}