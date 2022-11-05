import * as React from 'react'
import { Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { View, Box, Center, FormControl, Heading, HStack, Input, VStack, Stack, Button } from 'native-base';

export default function AddCategory() {
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
                                name='name' />
                        </FormControl>
                        <TouchableOpacity style={styles.customButtonAddCategory}>
                            <Text style={styles.textButton}>Add Category</Text>
                        </TouchableOpacity>
                    </VStack>
                    <Heading size="lg" style={styles.textListCategory}>
                        List Category
                    </Heading>
                    {
                        /* Subtle */
                    }
                    <Stack mb="2.5" mt="1.5" direction={{
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
                    </Stack>
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