import React from 'react'
import { StyleSheet, View, FlatList, Platform, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Portal, Text } from 'react-native-paper';

class CountryPicker extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: 'BY',
			isOpen: false
		}
		this.props.getCitiesFromCountryCode(this.state.selected)
	}

	render() {
		const country = this.props.countries.find(el => el.code === this.state.selected)
		const { getCitiesFromCountryCode } = this.props
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={[styles.input]}
					onPress={() => { this.setState({ isOpen: true }) }}
				>
					<Ionicons name="md-arrow-dropdown" style={styles.icon} size={20} />
					<Text style={styles.inputText}>{country.name}</Text>
				</TouchableOpacity>
				{
					this.state.isOpen &&
					<Portal>
						<SafeAreaView style={styles.statusBar}>
							<FlatList
								style={styles.dropdown}
								data={this.props.countries}
								keyExtractor={(item) => item.code}
								renderItem={({ item }) => (
									<TouchableOpacity
										style={styles.item}
										onPress={() => {
											this.setState({
												selected: item.code,
												isOpen: false
											}, () => getCitiesFromCountryCode(item.code))
										}}
									>
										<Text style={styles.itemText}>{item.name}</Text>
									</TouchableOpacity>
								)}
							/>
						</SafeAreaView>
					</Portal>
				}
			</View>
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
		borderColor: '#191919',
		backgroundColor: '#000',
		borderBottomWidth: 1,
	},
	input: {
		position: 'relative',
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#000'
	},
	inputText: {
		fontSize: 16,
		color: '#fff'
	},
	icon: {
		color: '#fff',
		position: 'absolute',
		zIndex: 2,
		right: 19,
		top: 15
	},
	dropdown: {
		flex: 1,
		backgroundColor: '#000'
	},
	item: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#191919'
	},
	itemText: {
		fontSize: 16,
		color: '#fff'
	}
});

export default CountryPicker