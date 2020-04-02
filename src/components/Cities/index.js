import React, { Component, Fragment } from 'react'
import CitiesList from './CitiesList'
import CitiesSearch from './CitiesSearch'
import Preloader from '../Preloader'

class Cities extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filteredCities: this.props.cities,
			filterText: '',
			loading: false
		}
	}

	filterList = async (value) => {
		const filtered = this.props.cities.filter(el => {
			const name = String(el.name).toUpperCase()
			const text = String(value).toUpperCase()
			return name.indexOf(text) === 0
		})

		this.setState({
			filterText: value,
			filteredCities: filtered
		})
	}

	setCity = (name) => {
		this.setState({
			loading: true
		})
		this.filterList(name)
			.then(() => {
				this.setState({
					loading: false
				})
			})
	}

	render() {
		const { navigation } = this.props
		return (
			<Fragment>
				{
					this.state.loading ?
						<Preloader /> :
						<Fragment>
							<CitiesSearch
								value={this.state.filterText}
								onInput={this.filterList} />
							<CitiesList
								list={this.state.filteredCities}
								navigation={navigation}
								setCity={this.setCity} />
						</Fragment>
				}
			</Fragment>
		)

	}
}

export default Cities