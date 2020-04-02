const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
	if (action.type === 'SET_COUNTRY_LIST') {
		return [...state, ...action.payload]
	} else {
		return state
	}
}