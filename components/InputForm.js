import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { Box, Center, FormControl, Heading, HStack, Input, Link, VStack } from 'native-base';


export default function InputForm({ navigation }) {
    return (
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
                            placeholder='Email'
                            name='email' />
                    </FormControl>
                    <FormControl>
                        {/* <FormControl.Label>Password</FormControl.Label> */}
                        <Input style={styles.input}
                            type="password"
                            placeholder='Password'
                            name='password' />
                        {/* <Link _text={{
                            fontSize: "xs",
                            fontWeight: "500",
                            color: "indigo.500"
                        }} alignSelf="flex-end" mt="1">
                            Forget Password?
                        </Link> */}
                    </FormControl>
                    <TouchableOpacity style={styles.customButtonLogin} onPress={() => navigation.navigate("ListsTodo")}>
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
    )
}

const styles = StyleSheet.create({
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