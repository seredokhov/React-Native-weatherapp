import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import City from './City'
import { connect } from 'react-redux'
import { setLocation } from '../../../actions'
import Service from '../../../services/fetch'


class CitiesList extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
	}

	setCoords = (id, name) => {
		this.props.setCity(name)
		Service.getWeatherFromId(id)
			.then(res => {
				//this.props.setCity(name)
				this.props.setLocation(res.coord)
			})
			// .then(setTimeout(() => {
			//   this.props.navigation.navigate('Home')
			// }, 1000))
			.catch(err => console.log(err))
	}
	render() {
		const { list } = this.props
		return (
			<FlatList
				style={styles.list}
				data={list}
				keyExtractor={(item) => item.city_id}
				renderItem={({ item }) =>
					<City city={item} onChange={this.setCoords} />}
			/>
		)
	}
}

const styles = StyleSheet.create({
	list: {
		flex: 1
	}
})

export default connect(null, { setLocation })(CitiesList)