import React from 'react'
import DailyForecast from '../components/DailyForecast'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationEvents } from 'react-navigation';

class ForecastScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<NavigationEvents onWillBlur={() => this.props.navigation.goBack()} />
				<DailyForecast coords={this.props.location.coords} />
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#191919'
	}
});

const MapStateToProps = (store) => ({ location: store.location })

export default connect(MapStateToProps, null)(ForecastScreen)