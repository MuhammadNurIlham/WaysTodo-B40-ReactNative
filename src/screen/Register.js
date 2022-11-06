import * as React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Box, Center, FormControl, Heading, HStack, Input, VStack } from 'native-base';
import LoginIcon from '../../assets/LoginIcon.png';
import { API } from '../config/API';

export default function Register({ navigation }) {
    const [form, setForm] = React.useState("")

    function handleOnChange(name, value) {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleOnSubmit = async () => {
        try {
            const response = await API.post("/auth/register", form);
            console.log(response);
            alert(`Selamat ${response.data.user.firstName} kamu berhasil mendaftar`);
            navigation.navigate("Login")
        } catch (e) {
            console.log(e, "this error")
            alert("Yahhh Gagal Mendaftar")
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
                        Register
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                placeholder='Email'
                                keyboardType={"email-address"}
                                value={form.email}
                                name='email'
                                onChangeText={(value) => handleOnChange("email", value)} />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                type="text"
                                placeholder='Name'
                                value={form.firstName}
                                name='firstName'
                                onChangeText={(value) => handleOnChange("firstName", value)} />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Password</FormControl.Label> */}
                            <Input style={styles.input}
                                type="password"
                                placeholder='Password'
                                value={form.password}
                                name='password'
                                secureTextEntry={true}
                                onChangeText={(value) => handleOnChange("password", value)} />
                            {/* <Link _text={{
                            fontSize: xs                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link> */}
                        </FormControl>
                        <TouchableOpacity
                            style={styles.customButtonLogin}
                            onPress={handleOnSubmit} >
                            <Text style={styles.textButton}>Register</Text>
                        </TouchableOpacity>
                        <HStack mt="6" justifyContent="center">
                            <Text style={styles.teks}>
                                Joined as before?{" "}
                            </Text>
                            <TouchableOpacity style={styles.toRegister} onPress={() => navigation.navigate("Login")}>
                                Login
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
        lineHeight: 21,
    },
    customButtonLogin: {
        backgroundColor: '#ff5555',
        width: "100%",
        padding: '10px',
        marginVertical: "5px",
        borderRadius: 10,
        textAlign: 'center',
    },
    toRegister: {
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