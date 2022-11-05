import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LandingPage from './src/screen/LandingPage';
import Register from './src/screen/Register';
import Login from './src/screen/Login';
import ListsTodo from './src/screen/ListsTodo';
import AddCategory from './src/screen/AddCategory';
import AddList from './src/screen/AddList';
import DetailList from './src/screen/DetailList';
import Firebase from './src/config/Firebase';

// import screen

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState();

    function authUser(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                headerMode: "screen",
                headerTintColor: "indigo",
                headerStyle: { backgroundColor: "pink" },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName
                    let colorName

                    if (route.name === "ListsTodo") {
                        iconName = focused ? "list-circle" : "list-circle-outline"
                    } else if (route.name === "AddList") {
                        iconName = focused ? "add-circle" : "add-circle-outline"
                    } else if (route.name === "AddCategory") {
                        iconName = focused ? "duplicate" : "duplicate-outline"
                    }

                    return <Ionicons name={iconName} size={24} color="black" />
                },
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black"

            })} >
            <Tab.Screen name="ToDoList" component={ListsTodo} options={{ headerShown: false }} />
            <Tab.Screen name="AddList" component={AddList} options={{ headerShown: false }} />
            <Tab.Screen name="AddCategory" component={AddCategory} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default function Container() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={LandingPage}
                    options={{ title: "Home", headerShown: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{
                        title: "Login",
                        headerTintColor: "red",
                        headerMode: "screen"
                    }}
                />
                <Stack.Screen
                    name='Register'
                    component={Register}
                    options={{ title: "Register" }}
                />
                <Stack.Screen
                    name='ListsTodo'
                    component={MyTab}
                    options={{ title: "Todo List Menu", headerShown: false }}
                />
                <Stack.Screen name='AddList' component={AddList} options={{ title: "Add List", headerShown: false }} />
                <Stack.Screen name='AddCategory' component={AddCategory} options={{ title: "Add Category", headerShown: false }} />
                <Stack.Screen name='DetailList' component={DetailList} options={{ title: "Detail List", headerShown: false }} />
                {/* <Stack.Screen name='Register' component={Register} options={{ title: "Register" }} />
                <Stack.Screen name='Register' component={Register} options={{ title: "Register" }} />
                <Stack.Screen name='Register' component={Register} options={{ title: "Register" }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}