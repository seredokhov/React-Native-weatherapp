import Config from '../config'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default {
	getWeatherFromCoords: ({ lat, lon }) => {
		return fetch(`${Config.weatherUri}?lat=${lat}&lon=${lon}&lang=ru&appid=${Config.appId}`)
			.then((res) => res.json())
			.catch((err) => console.log(err))
	},

	getWeatherFromId: (id) => {
		return fetch(`${Config.weatherUri}?id=${id}&appid=${Config.appId}`)
			.then((res) => res.json())
			.catch((err) => console.log(err))
	},

	getForecastFromCoords: ({ lat, lon }) => {
		return fetch(`${Config.forecastUri}?lat=${lat}&lon=${lon}&lang=ru&appid=${Config.appId}`)
			.then((res) => res.json())
			.catch((err) => console.log(err))
	},

	getLocationAsync: async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			return {}
		}
		let location = await Location.getCurrentPositionAsync({});
		const { latitude, longitude } = location.coords;
		return {
			lat: latitude,
			lon: longitude
		}
	}
}