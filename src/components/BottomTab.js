import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  return (
    <View classname="flex-1 justify-center items-center bg-base">
      <Text classname="text-3xl font-bold text-primary">Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View classname="flex-1 justify-center items-center bg-base">
      <Text classname="text-3xl font-bold text-primary">Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
