import React, { Component } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

class CitiesSearch extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder="Введите название города"
					onChangeText={value => this.props.onInput(value)}
					value={this.props.value}
				/>
				{
					this.props.value !== '' &&
					<TouchableOpacity
						style={[styles.button]}
						onPress={() => { this.props.onInput('') }}
					>
						<Ionicons name="md-close-circle" style={styles.icon} size={25} />
					</TouchableOpacity>
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'relative'
	},
	input: {
		color: '#fff',
		fontSize: 16,
		height: 40,
		paddingHorizontal: 15,
		borderBottomWidth: 1,
		borderColor: '#fff'
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		top: 0,
		right: 0,
		height: 40,
		width: 40,
		zIndex: 2
	},
	icon: {
		color: '#fff',
	},
})

export default CitiesSearch