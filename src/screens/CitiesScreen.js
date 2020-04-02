import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import CountryPicker from '../components/CountryPicker'
import Cities from '../components/Cities'
import Preloader from '../components/Preloader'
import firebase from 'firebase';
import { Provider } from 'react-native-paper';

class CitiesScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cities: [],
			loading: false
		}
	}

	setAsyncState = (newState) => {
		return new Promise((resolve) => this.setState(newState, () => resolve()));
	}

	getCitiesFromCountryCode = async (code) => {
		this.setAsyncState({
			loading: true
		})
			.then(() => {
				const data = firebase.database().ref('cities/' + code)
				data.on('value', snap => {
					const arr = snap.val() || []
					this.setAsyncState({
						cities: arr.sort((a, b) => a.name > b.name)
					})
						.then(() => {
							setTimeout(() => {
								this.setState({
									loading: false
								})
							}, 500)
						})
				})
			})
	}

	render() {
		const { countries, navigation } = this.props
		return (
			<SafeAreaView style={styles.statusBar}>
				<Provider>
					<View style={styles.container}>
						<CountryPicker countries={countries} getCitiesFromCountryCode={this.getCitiesFromCountryCode} />
						{
							!this.state.loading ?
								<Cities cities={this.state.cities} navigation={navigation} /> :
								<Preloader text='Запрос данных...' />
						}
					</View>
				</Provider>
			</SafeAreaView>
		)
	}
}
const styles = StyleSheet.create({
	statusBar: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: '#000',
	},
	container: {
		flex: 1,
		backgroundColor: '#090909',
		position: 'relative'
	}
});

const MapStateToProps = (store) => ({ countries: store.countries })

export default connect(MapStateToProps, null)(CitiesScreen)