import React, { Component, Fragment } from 'react'
import AppNavigator from '../../navigation/AppNavigator'
import { StyleSheet, View } from 'react-native'
import Preloader from '../Preloader'
import Service from '../../services/fetch'
import { setLocation, setCountryList } from '../../actions'
import { connect } from 'react-redux'
import firebase from 'firebase';
import Config from '../../config'

class AppWithLocation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoad: false
		}
		firebase.initializeApp(Config.db)
		this.countries = firebase.database().ref('countries')

		Service.getLocationAsync()
			.then(res => {
				props.setLocation(res)
				return res
			})
			.then(res => {
				this.countries.on('value', snap => {
					props.setCountryList(snap.val())
				})
				return res
			})
			.then(() => {
				this.setState({ isLoad: true })
			})
	}

	render() {
		return (
			<Fragment>
				{
					this.state.isLoad ?
						<AppNavigator /> :
						<View style={styles.container}>
							<Preloader />
						</View>
				}
			</Fragment>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000'
	}
})

export default connect(null, { setLocation, setCountryList })(AppWithLocation)