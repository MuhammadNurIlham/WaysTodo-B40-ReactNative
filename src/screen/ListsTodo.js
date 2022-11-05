import { View, Text, StyleSheet } from 'react-native';
import * as React from 'react';
import { Avatar, Box, Button, Heading, HStack, Stack, Icon, Input, SearchIcon, Select, VStack, Center, Image, ScrollView } from 'native-base';
import man from '../../assets/man.jpg';
import vector from '../../assets/vector.png';
import ceklis from '../../assets/ceklis.png';

export default function ListsTodo({navigation}) {
    return (
        <View style={styles.container}>
            <HStack space={3} style={styles.header}>
                <Box rounded="md">
                    <Text style={styles.userName}>Hi Radif</Text>
                    <Text style={styles.totalList}>200 Lists</Text>
                </Box>
                <Avatar bg="indigo.500" size="lg" source={{
                    uri: man
                }}>US</Avatar>
                {/* <Center h="40" w="20" bg="primary.500" rounded="md" shadow={3} /> */}
            </HStack>
            <VStack w="100%" space={3} alignSelf="center" style={styles.search}>
                <Input placeholder="Search List..." variant="filled" width="100%" borderRadius="10" py="3" px="2" InputLeftElement={<Icon ml="2" size="4" color="green.400" as={<SearchIcon />} />} />
            </VStack>
            <HStack space={1} style={styles.InputSelect}>
                <Input h="10" w="20" bg="primary.300" rounded="md" shadow={3} />
                <Select h="10" w="20" bg="primary.500" rounded="md" shadow={3} placeholder="Category" >
                    <Select.Item>Study</Select.Item>
                    <Select.Item>Homework</Select.Item>
                    <Select.Item>Workout</Select.Item>
                </Select>
                <Select h="10" w="20" bg="primary.500" rounded="md" shadow={3} placeholder="Status" >
                    <Select.Item>Todo</Select.Item>
                    <Select.Item>Doing</Select.Item>
                    <Select.Item>Done</Select.Item>
                </Select>
            </HStack>
            <ScrollView>
                <VStack space={2}>
                    <Box style={styles.containerCardList}>
                        <HStack space={3} style={styles.titleList}>
                            <Text size="md" ml="-1">
                                Study - Golang
                            </Text>
                            <Button size="sm" variant="subtle" style={styles.buttonList} >
                                <Text style={styles.TextButtonList}>Study</Text>
                            </Button>
                        </HStack>
                        <HStack space={3} style={styles.ContentList}>
                            <Text fontWeight="400">
                                Lorem ipsum dolor sit amet.
                            </Text>
                            <Avatar bg="white" size="sm" source={{
                                uri: ceklis
                            }}>US</Avatar>
                        </HStack>
                        <HStack space={3} style={styles.FooterList}>
                            <HStack alignItems="center">
                                <Image source={{ uri: vector }} alt="vector"></Image>
                                <Avatar bg="white" size="xs" source={{
                                    uri: vector
                                }}>US</Avatar>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    19 July 2022
                                </Text>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box style={styles.containerCardList}>
                        <HStack space={3} style={styles.titleList}>
                            <Text size="md" ml="-1">
                                Study - Golang
                            </Text>
                            <Button size="sm" variant="subtle" style={styles.buttonList} >
                                <Text style={styles.TextButtonList}>Study</Text>
                            </Button>
                        </HStack>
                        <HStack space={3} style={styles.ContentList}>
                            <Text fontWeight="400">
                                Lorem ipsum dolor sit amet.
                            </Text>
                            <Avatar bg="white" size="sm" source={{
                                uri: ceklis
                            }}>US</Avatar>
                        </HStack>
                        <HStack space={3} style={styles.FooterList}>
                            <HStack alignItems="center">
                                <Image source={{ uri: vector }} alt="vector"></Image>
                                <Avatar bg="white" size="xs" source={{
                                    uri: vector
                                }}>US</Avatar>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    19 July 2022
                                </Text>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box style={styles.containerCardList}>
                        <HStack space={3} style={styles.titleList}>
                            <Text size="md" ml="-1">
                                Study - Golang
                            </Text>
                            <Button size="sm" variant="subtle" style={styles.buttonList} >
                                <Text style={styles.TextButtonList}>Study</Text>
                            </Button>
                        </HStack>
                        <HStack space={3} style={styles.ContentList}>
                            <Text fontWeight="400">
                                Lorem ipsum dolor sit amet.
                            </Text>
                            <Avatar bg="white" size="sm" source={{
                                uri: ceklis
                            }}>US</Avatar>
                        </HStack>
                        <HStack space={3} style={styles.FooterList}>
                            <HStack alignItems="center">
                                <Image source={{ uri: vector }} alt="vector"></Image>
                                <Avatar bg="white" size="xs" source={{
                                    uri: vector
                                }}>US</Avatar>
                                <Text color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }} fontWeight="400">
                                    19 July 2022
                                </Text>
                            </HStack>
                        </HStack>
                    </Box>
                </VStack>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: "20px",
        backgroundColor: "white",
        height: "100%",
    },
    containerCardList: {
        backgroundColor: "#DAEFFF",
        borderRadius: 8,
    },
    header: {
        justifyContent: "space-between",
        paddingBottom: "30px",
        paddingTop: "20px"
    },
    userName: {
        fontWeight: "900",
        fontFamily: "avenir",
        fontSize: 25,
        color: "#000000"
    },
    totalList: {
        color: "#FF5555",
        fontWeight: "400",
        fontFamily: "avenir",
        fontSize: 12,
        textAlign: "left",
        alignItems: "flex-start",
        paddingTop: "7px"
    },
    InputSelect: {
        paddingTop: "20px",
        paddingBottom: "20px",
        justifyContent: "space-between"
    },
    search: {
        paddingBottom: "20px"
    },
    titleList: {
        padding: "5px",
        justifyContent: "space-between"
    },
    ContentList: {
        padding: "4px",
        justifyContent: "space-between"
    }

})