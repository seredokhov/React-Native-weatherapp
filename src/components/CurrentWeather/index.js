import React, { Fragment } from 'react'
import Service from '../../services/fetch'
import Widget from '../Widget'
import ButtonList from './ButtonList'
import Preloader from '../Preloader'
import { connect } from 'react-redux'

class CurrentWeather extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			weatherList: null,
			loaded: false
		}
		this.refresh = this.refresh.bind(this)
		this.getWeather(this.props.location.coords)
	}

	componentWillReceiveProps(nextProps) {
		this.refresh(nextProps.location.coords)
	}

	getWeather(coords) {
		return Service.getWeatherFromCoords(coords)
			.then((json) => {
				if (json.name) {
					this.setState({
						weatherList: json,
						loaded: true
					})
				}
			})
	}

	refresh(coords) {
		this.setState({
			loaded: false
		}, () => {
			this.getWeather(coords)
				.then(() => {
					this.setState({
						loaded: true
					})
				})
		})
	}

	render() {
		const { navigation } = this.props
		return (
			<Fragment>
				{
					this.state.weatherList && this.state.loaded ?
						<Fragment>
							<Widget weatherList={this.state.weatherList} />
							<ButtonList
								coords={this.state.weatherList.coord}
								navigation={navigation}
								city={this.state.weatherList.name}
								refresh={this.refresh}
							/>
						</Fragment> :
						<Preloader text='Запрос данных...' />
				}
			</Fragment>
		)
	}
}

const MapStateToProps = (store) => ({ location: store.location })

export default connect(MapStateToProps, null)(CurrentWeather)