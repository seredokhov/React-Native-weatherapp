export const setLocation = (coords) => {
	return {
		type: 'SET_LOCATION',
		payload: coords
	}
}

export const setCountryList = (countryList) => {
	return {
		type: 'SET_COUNTRY_LIST',
		payload: countryList
	}
}