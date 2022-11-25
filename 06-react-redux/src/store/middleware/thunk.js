function thunk(store) {
	const next = store.dispatch

	function disptachThunk(action) {
		if (typeof action === 'function') {
			action(store.dispatch, store.getState)
		} else {
			next(action)
		}
	}

	store.dispatch = disptachThunk
}

export default thunk