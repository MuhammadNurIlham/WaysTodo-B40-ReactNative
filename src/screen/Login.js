import * as React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { View, Box, Center, FormControl, Heading, HStack, Input, Link, VStack } from 'native-base';
import LoginIcon from '../../assets/LoginIcon.png';
import API from '../config/API';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function Login({ navigation }) {
    const [form, setForm] = React.useState({
        email: "",
        password: "",
    });
    console.log("this is form", form);

    function handleOnChange(name, value) {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnSubmit = async () => {
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };
            console.log(config)

            const body = JSON.stringify(form);
            const response = await axios.post("https://api.v2.kontenbase.com/query/api/v1/0b55d1c0-775a-4d4e-88b0-e11a6249da55/auth/login", body, config);
            console.log(body)
            console.log(response)

            if (response) {
                await AsyncStorage.setItem('token', response.data.token);
                await AsyncStorage.setItem("user_id", response.data.user._id);
            }

            const value = await AsyncStorage.getItem("token");
            if (value !== null) {
                console.log("ini value tokennya", value);
                navigation.navigate("ListsTodo")
                alert(`Selamat ${response.data.user.firstName} kamu berhasil Login`)
            }

            // if (response) {
            //     await AsyncStorage.setItem('token', response.data.token);
            //     await AsyncStorage.setItem("user_id", response.data.user._id);
            // }

            // const token = await AsyncStorage.getItem('token');
            // if (token !== null) {
            //     console.log(response.data.user.firstName);
            //     console.log(token);
            //     navigation.navigate("ListsTodo")
            //     alert(`Selamat ${response.data.user.firstName} kamu berhasil Login`);
            // }
        } catch (error) {
            console.log(error);
            console.log("Ada yang salah");
            alert(error.response.data.message)
            alert("Salah email atau password");
        }
    };


    return (
        <View style={styles.container}>
            <Image source={LoginIcon} alt="IconPage" style={{
                width: "256px",
                height: "184px",
                resizeMode: "cover"
            }} />
            <Center w="100%" style={styles.formLogin}>
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" style={styles.textLogin}>
                        Login
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                type="email"
                                keyboardType={"email"}
                                placeholder='Email'
                                name='email'
                                onChangeText={(value) => handleOnChange("email", value)}
                                value={form.email} />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Password</FormControl.Label> */}
                            <Input style={styles.input}
                                type="password"
                                placeholder='Password'
                                name='password'
                                onChangeText={(value) => handleOnChange("password", value)}
                                value={form.password} />
                            {/* <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link> */}
                        </FormControl>
                        <TouchableOpacity style={styles.customButtonLogin} onPress={handleOnSubmit}>
                            <Text style={styles.textButton}>Login</Text>
                        </TouchableOpacity>
                        <HStack mt="6" justifyContent="center">
                            <Text style={styles.teks}>
                                New Users ?{" "}
                            </Text>
                            <TouchableOpacity style={styles.toLogin} onPress={() => navigation.navigate("Register")}>
                                Register
                            </TouchableOpacity>
                        </HStack>
                    </VStack>
                </Box>
            </Center>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: "25px",
        paddingTop: '40px',
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
    formLogin: {
        backgroundColor: "white"
    },
    textLogin: {
        color: '#000000',
        fontFamily: 'avenir',
        fontWeight: '800',
        fontSize: 25,
        lineHeight: 34,
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "800",
        fontFamily: "avenir",
        lineHeight: 22,
    },
    customButtonLogin: {
        backgroundColor: '#ff5555',
        width: "100%",
        padding: '10px',
        marginVertical: "5px",
        borderRadius: 10,
        textAlign: 'center',
    },
    toLogin: {
        fontSize: 12,
        fontFamily: 'avenir',
        fontWeight: '800',
        lineHeight: 17,
        color: '#FF5555',
        textAlign: 'center',
        alignItems: 'center'
    },
    teks: {
        fontFamily: 'avenir',
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 17,
        textAlign: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#0000001A',
        color: 'black',
        borderWidth: 1,
        borderColor: '#0000004D',
    }
})