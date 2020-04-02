import React from 'react'
import { StyleSheet, View } from 'react-native'
import CurrentWeather from '../components/CurrentWeather'

class HomeScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { navigation } = this.props
		return (
			<View style={styles.container}>
				<CurrentWeather navigation={navigation} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#090909',
		paddingHorizontal: 20
	}
});

export default HomeScreen