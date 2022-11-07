import * as React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Box, Center, FormControl, Heading, HStack, Input, VStack, Stack, Button, FlatList } from 'native-base';
import { API } from '../config/API';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

export default function AddCategory() {

    const isFocused = useIsFocused();
    const [category, setCategory] = React.useState({ user_id: null })
    const [dataCategory, setDataCategory] = React.useState([])
    console.log(category);

    function handleOnChange(name, value) {
        setCategory({
            ...category,
            [name]: value,
        });
    };

    const handleOnSubmit = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const user_id = await AsyncStorage.getItem('user_id')
            setCategory({
                user_id
            })
            console.log("ini tokennya", token)
            console.log("ini user id nya", user_id)
            if (!token) {
                navigation.navigate("Login");
            }
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };
            const response = await axios.post("https://api.v2.kontenbase.com/query/api/v1/0b55d1c0-775a-4d4e-88b0-e11a6249da55/Category", category, config);
            alert(`Category anda berhasil ditambahkan`);
            getCategory();
            console.log(response.data)
            console.log(category);
        } catch (e) {
            console.log(e);
            console.log("ini errornya");
            alert("Gagal menambahkan category");
        }
    };

    const getCategory = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const user_id = await AsyncStorage.getItem('user_id');
            setCategory({
                user_id
            })
            console.log("ini token get category", token)
            console.log("ini user_id get category", user_id)
            if (token === null) {
                navigation.navigate("Login")
            }
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer ' + token
                },
            };
            const response = await API.get(`/Categorys?user_id=${user_id}`, config);
            setDataCategory(response.data)
        } catch (error) {
            console.log("ini error getCategory");
            console.log(error);
        };
    }

    React.useEffect(() => {
        if (isFocused) {
            getCategory()
        }
    }, [isFocused])

    const _dataCategoryRender = ({ item }) => {
        return (
            <View style={{ margin: 20, color: "white" }}>
                <Stack mb="2.5" mt="1.5" direction={{
                    base: "row",
                    sm: "row"
                }} space={1}>
                    <Button size="sm" variant="subtle" style={styles.buttonList}>
                        {item.name}
                    </Button>
                </Stack>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Center w="100%" style={styles.formAddCategory}>
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading size="lg" style={styles.textAddCategory}>
                        Add Category
                    </Heading>
                    <VStack space={3} mt="5">
                        <FormControl>
                            {/* <FormControl.Label>Email ID</FormControl.Label> */}
                            <Input style={styles.input}
                                type="text"
                                placeholder='Name'
                                name='name'
                                value={category.name}
                                onChangeText={(value) => handleOnChange("name", value)} />
                        </FormControl>
                        <TouchableOpacity
                            style={styles.customButtonAddCategory}
                            onPress={handleOnSubmit} >
                            <Text style={styles.textButton}>Add Category</Text>
                        </TouchableOpacity>
                    </VStack>
                    <Heading size="lg" style={styles.textListCategory}>
                        List Category
                    </Heading>
                    {
                        /* Subtle */
                    }
                    {/* <Box>
                        <FlatList
                            w="full"
                            space={2}
                            mt="6"
                            data={data}
                            key={(item) => item.index}
                            renderItem={({ item }) => (
                                <Button size="sm" variant="subtle">
                                    {item.name}
                                </Button>
                            )}
                        />
                    </Box> */}
                    <Text style={{ marginTop: 20, marginRight: 100 }}>

                        <FlatList
                            numColumns={3}
                            data={dataCategory}
                            renderItem={_dataCategoryRender}
                            keyExtractor={(item) => item}
                        />
                    </Text>
                    {/* <Stack mb="2.5" mt="1.5" direction={{
                        base: "row",
                        sm: "row"
                    }} space={1}>
                        <Button size="sm" variant="subtle" style={styles.buttonList}>
                            Study
                        </Button>
                        <Button size="sm" variant="subtle" colorScheme="secondary" style={styles.buttonList}>
                            Homework
                        </Button>
                        <Button size="sm" variant="subtle" colorScheme="warning" style={styles.buttonList}>
                            Workout
                        </Button>
                    </Stack> */}
                </Box>
            </Center>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: "5px",
        paddingTop: '40px',
        height: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF"
    },
    formAddCategory: {
        backgroundColor: "white",
    },
    textAddCategory: {
        color: '#000000',
        fontFamily: "avenir",
        fontWeight: '800',
        fontSize: 25,
        lineHeight: 34,
    },
    textListCategory: {
        color: '#000000',
        fontFamily: 'avenir',
        fontWeight: '700',
        fontSize: 25,
        lineHeight: 34,
        paddingTop: '50px',
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "800",
        fontFamily: "avenir",
        lineHeight: 22,
    },
    customButtonAddCategory: {
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
    },
    buttonList: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})