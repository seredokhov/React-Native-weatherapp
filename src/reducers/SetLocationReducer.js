const INITIAL_STATE = {
	coords: {
		lat: 53.55,
		lon: 27.33
	}
}

export default (state = INITIAL_STATE, action) => {
	if (action.type === 'SET_LOCATION') {
		return {
			...state,
			coords: action.payload
		}
	} else {
		return state
	}
}