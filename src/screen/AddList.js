import * as React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Box, Center, FormControl, Heading, HStack, Input, VStack, TextArea, Select } from 'native-base';
import { API } from '../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';



export default function AddList() {
    const [dataCategory, setDataCategory] = React.useState([]);
    const isFocused = useIsFocused();
    const getCategory = async () => {
        try {
            const token = await AsyncStorage.getItem("token")
            const user_id = await AsyncStorage.getItem("user_id");
            setList({
                user_id,
                status: "pending"
            })
            if (token === null) {
                navigation.navigate("Login")
            }
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
            };
            const response = await API.get(`/Categorys?user_id=${user_id}`, config);
            setDataCategory(response.data)
        } catch (error) {
            console.log(error);
        }
    };

    // start for add list table
    const [list, setList] = React.useState({ user_id: null, status: null });

    function handleOnChange(name, value) {
        setList({
            ...list,
            [name]: value,
        });
    };

    const handleOnSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem("token");

            if (!token) {
                navigation.navigate("Login")
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + token
                },
            };
            const response = await axios.post('https://api.v2.kontenbase.com/query/api/v1/0b55d1c0-775a-4d4e-88b0-e11a6249da55/List', list, config)
            console.log("success post", response)
            alert("Data list berhasil ditambahkan")
            // navigation.navigate("ListsTodo")

        } catch (error) {
            console.log(error)
            console.log("ini error list", list);
            console.log("this error");
            alert("Gagal menambahkan list data")
        }
    };

    React.useEffect(() => {
        if (isFocused) {
            getCategory();
        }
    }, []);

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
                                name='name'
                                value={list.name}
                                onChangeText={(value) => handleOnChange("name", value)} />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            {/* <Input style={styles.input}
                                type="email"
                                placeholder='Email'
                                name='email' /> */}
                            <Select
                                placeholder='Category'
                                style={styles.input}
                                onValueChange={(value) => handleOnChange("category", value)}>
                                {dataCategory?.map((item) => (
                                    <Select.Item label={item?.name} value={item?.name} />
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                type="text"
                                placeholder='Choose Date (masih belum kelar)'
                                value={list.date}
                                name="date"
                                onChangeText={(value) => handleOnChange("date", value)} />
                        </FormControl>
                        <FormControl>
                            {/* <FormControl.Label>Password</FormControl.Label> */}
                            <TextArea style={styles.input}
                                type="text"
                                placeholder='Description'
                                name='description'
                                value={list.description}
                                onChangeText={(value) => handleOnChange("description", value)} />
                        </FormControl>
                        <TouchableOpacity
                            style={styles.customButtonLogin}
                            onPress={handleOnSubmit} >
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