import React from 'react'
import { View } from 'native-base';
import { Text, Image, StyleSheet } from 'react-native';
import iconPage from '../../assets/iconPage.png';
import { TouchableOpacity } from 'react-native';

export default function LandingPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={iconPage} alt="IconPage" style={{
                width: "228px",
                height: "300px",
                resizeMode: "cover"
            }} />
            <Text style={styles.title}>Ways <Text style={styles.title1}>To<Text style={styles.title2}>Do</Text></Text></Text>
            <Text style={styles.subtitle}>Write your activity and finish your activity.{'\n'}Fast, Simple and Easy to Use</Text>
            <TouchableOpacity
                style={styles.customButtonLogin}
                onPress={() => navigation.navigate("Login")}>
                <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.customButtonRegister}
                onPress={() => navigation.navigate("Register")} >
                <Text style={styles.textButton}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: "20px",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
    title: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 45,
        fontFamily: "avenir",
        lineHeight: 47,
        color: "#000000"
    },
    title1: {
        color: "#B82020"
    },
    title2: {
        color: "#FF5555"
    },
    subtitle: {
        textAlign: "center",
        fontFamily: "avenir",
        fontWeight: '600',
        fontSize: 12,
        paddingVertical: "25px"
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "800",
        fontFamily: "avenir",
        lineHeight: 21,
    },
    customButtonLogin: {
        backgroundColor: '#ff5555',
        width: "80%",
        padding: '10px',
        marginVertical: "5px",
        borderRadius: 10,
        textAlign: 'center'
    },
    customButtonRegister: {
        backgroundColor: '#0000004F',
        width: "80%",
        padding: '10px',
        marginVertical: "5px",
        borderRadius: 10,
        textAlign: 'center'
    }
})