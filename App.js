import * as React from "react";
import { NativeBaseProvider, View } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import Container from "./Container";

// Define the config
// const config = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// };

// extend the theme
// export const theme = extendTheme({ config });
const Stack = createStackNavigator()
export default function App() {
  return (
    <NativeBaseProvider>
      <View h="100%">
        <Container />
      </View>
    </NativeBaseProvider>
  );
}


{/* <ToggleDarkMode />/ */ }

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
