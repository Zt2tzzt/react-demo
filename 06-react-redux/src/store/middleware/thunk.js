function thunk(store) {
	const next = store.dispatch

	function disptachThunk(action) {
		if (typeof action === 'function') {
			console.log('dispatch function')
			action(store.dispatch, store.getState)
		} else {
			console.log('dispatch obj')
			next(action)
		}
	}

	store.dispatch = disptachThunk
}

export default thunk