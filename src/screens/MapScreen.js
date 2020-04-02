import React, { Component } from 'react'
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux'
import { mapStyle } from '../mapStyle'
import { NavigationEvents } from 'react-navigation';


class MapScreen extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { lat, lon } = this.props.location.coords
		return (
			<SafeAreaView style={styles.statusBar}>
				<MapView
					style={styles.map}
					customMapStyle={mapStyle}
					region={{
						latitude: lat,
						longitude: lon,
						latitudeDelta: 0.2,
						longitudeDelta: 0.5
					}}
				>
					<Marker
						coordinate={{
							latitude: lat,
							longitude: lon,
						}}
					/>
				</MapView>
			</SafeAreaView>
		)
	}
}



const styles = StyleSheet.create({
	statusBar: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: '#000'
	},
	container: {
		flex: 1,
		backgroundColor: '#191919'
	},
	map: {
		flex: 1,
		backgroundColor: '#191919'
	}
})

const MapStateToProps = (store) => ({ location: store.location })

export default connect(MapStateToProps, null)(MapScreen)