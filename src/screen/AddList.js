import * as React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Box, Center, FormControl, Heading, HStack, Input, VStack, TextArea, Select } from 'native-base';

export default function AddList() {
    return (
        <View style={styles.container}>
            <Center w="100%" style={styles.formAddList}>
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" style={styles.textLogin}>
                        Add List
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                type="text"
                                placeholder='Name'
                                name='name' />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            {/* <Input style={styles.input}
                                type="email"
                                placeholder='Email'
                                name='email' /> */}
                            <Select placeholder='Category' style={styles.input}>
                                <Select.Item>One</Select.Item>
                                <Select.Item>Two</Select.Item>
                                <Select.Item>Three</Select.Item>
                            </Select>
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                type="text"
                                placeholder='Choose Date (masih belum kelar)'
                                name='date' />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Password</FormControl.Label> */}
                            <TextArea style={styles.input}
                                type="text"
                                placeholder='Description'
                                name='description' />
                        </FormControl>
                        <TouchableOpacity style={styles.customButtonLogin}>
                            <Text style={styles.textButton}>Add List</Text>
                        </TouchableOpacity>
                    </VStack>
                </Box>
            </Center>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: "25px",
        paddingTop: '40px',
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
    formAddList: {
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
    input: {
        backgroundColor: '#0000001A',
        color: 'black',
        borderWidth: 1,
        borderColor: '#0000004D',
    }
})