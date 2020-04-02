import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Preloader = ({ text }) => {
	const msg = text && <Text style={styles.loadingText}>{text}</Text>
	return (
		<View style={styles.container}>
			<ActivityIndicator size={100} color="#fbb82b" />
			{msg}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	loadingText: {
		marginVertical: 10,
		fontSize: 18,
		color: '#fff',
		textAlign: 'center'
	}
});

export default Preloader