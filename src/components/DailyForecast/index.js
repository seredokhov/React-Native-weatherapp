import React, { Component, Fragment } from 'react'
import Service from '../../services/fetch'
import ForecastList from '../ForecastList'
import Preloader from '../Preloader'

class DailyForecast extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dailyForecast: null,
			loaded: false
		}
		this.getForecast(props.coords)
	}

	getForecast(coords) {
		return Service.getForecastFromCoords(coords)
			.then((json) => {
				const reducedData = this.reduceData(json.list)
				this.setState({
					dailyForecast: reducedData,
					loaded: true
				})
			})
	}

	reduceData(data) {
		return data.reduce((accum, curent) => {
			const now = new Date(curent.dt * 1000)
			const dateStr = now.toLocaleDateString('en-GB')
			const isExist = accum.some(el => el.dateStr === dateStr)

			if (accum.length === 0 || !isExist) {
				accum.push({
					dt: curent.dt,
					dateStr,
					forecasts: []
				})
			}

			return accum.map((el) => {
				if (el.dateStr === dateStr) {
					el.forecasts.push({
						dt: curent.dt,
						date: dateStr,
						time: now.toLocaleTimeString('en-GB').slice(0, -3),
						icon: curent.weather[0].icon,
						description: curent.weather[0].description,
						clouds: curent.clouds.all,
						wind: curent.wind,
						temp: curent.main.temp,
						pressure: curent.main.pressure,
						humidity: curent.main.humidity
					})
				}
				return el
			})
		}, [])
	}

	render() {
		return (
			<Fragment>
				{
					this.state.dailyForecast && this.state.loaded ?
						<ForecastList dailyForecast={this.state.dailyForecast} />
						:
						<Preloader text='Запрос данных...' />
				}
			</Fragment>
		)
	}
}

export default DailyForecast