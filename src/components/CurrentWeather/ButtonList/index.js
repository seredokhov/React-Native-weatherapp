import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ButtonList = ({ coords, navigation, city, refresh }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.button, styles.buttonRefresh]}
				onPress={() => { refresh(coords) }}
			>
				<Ionicons name="md-refresh" style={styles.icon} size={20} color="#fff" />
				<Text style={styles.buttonText}>Обновить</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.button, styles.buttonMore]}
				onPress={() => { navigation.navigate('Forecast', { coords, city }) }}
			>
				<Ionicons name="md-time" style={styles.icon} size={20} color="#fff" />
				<Text style={styles.buttonText}>По часам</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginVertical: 10
	},
	icon: {
		marginRight: 10
	},
	button: {
		flex: 1,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
		marginHorizontal: 5
	},
	buttonRefresh: {
		backgroundColor: '#c89322'
	},
	buttonMore: {
		backgroundColor: '#1e4daf'
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center'
	},
});

export default ButtonList