import { View, Text } from 'react-native'
import React from 'react'
import { AspectRatio, Box, Button, Center, Heading, HStack, Stack } from 'native-base';
import { StyleSheet } from 'react-native';

export default function DetailList() {
    return (
        <Box alignItems="center" style={styles.container}>
            <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "blue.700"
            }} _web={{
                shadow: 2,
                borderWidth: 0
            }} _light={{
                backgroundColor: "blue.300"
            }}>
                <HStack p="4" space={3} justifyContent="end">
                    <Button size="sm" variant="subtle" style={styles.buttonList} >
                        <Text style={styles.TextButtonList}>Study</Text>
                    </Button>
                </HStack>
                <Stack p="4" space={3}>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            Study - Golang
                        </Heading>
                    </Stack>
                    <Text fontWeight="400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque similique dicta, in id consequuntur quisquam totam distinctio fugiat non, aut dolor. Neque molestiae libero reprehenderit nam molestias possimus fugit mollitia nobis tempora quidem adipisci cum unde deserunt eveniet ad dolore quia voluptas, obcaecati quos dolor rerum sit quam est sapiente? Quis aliquid voluptate sapiente. Velit expedita praesentium perferendis reprehenderit nihil rerum quibusdam doloremque, quia obcaecati quis dolore voluptatem. Omnis a eius corrupti et temporibus illum blanditiis nisi ut nulla tempora?
                    </Text>
                    <HStack alignItems="center" space={4} justifyContent="space-between">
                        <HStack alignItems="center">
                            <Text color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }} fontWeight="400">
                                19 July 2022 - (kurang logonya)
                            </Text>
                        </HStack>
                    </HStack>
                </Stack>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: "25px"
    },
    buttonList:{
        borderRadius: 10,

    },
    TextButtonList:{
        fontSize: 15,
        fontWeight:'700',
        paddingHorizontal:"15px",
        paddingVertical:"5px"
    }
})