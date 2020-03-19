import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import Browse from "./components/Browse";
import Store from './components/Store';
import SignIn from './components/SignIn';
import ItemCard from "./components/ItemCard";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  StatusBar
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

StatusBar.setBarStyle("default", true);
// StatusBar.setBarStyle('dark-content', false);
StatusBar.setHidden(true)

const Stack = createStackNavigator();

export interface NavProps {
  navigation: {
    /**
     * Navigate to given page
     */
    navigate: (
      name: string,
      params?: any
    ) => void;
  };
  route: {
    params: any;
  };
}

export default class App extends React.Component {
  render() {
    const homeHeader = (props: any) => {
      return (
        <View
          style={{
            flexDirection: "row",
            paddingTop: props.insets.top,
            alignItems: "flex-start",
            backgroundColor: 'white',
            justifyContent: "space-between",
            shadowColor: "#c7c7c7",
            shadowOpacity: 1,
            shadowRadius: 22
          }}
        >
          <View
            style={{
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "flex-start"
            }}
          >
            <View style={{ ...appStyle.pad_x }}>
              <Ionicons
                name="ios-cog"
                size={32}
                color="#c171e9"
              />
            </View>
            <View style={{ ...appStyle.pad_x }}>
              <Ionicons
                name="ios-planet"
                size={32}
                color="#c171e9"
              />
            </View>
          </View>
          <View>
            <Image
              source={require("./img/treep.png")}
              style={{ width: 100, height: 25 }}
              resizeMode='contain'
            />
          </View>
          <View
            style={{
              flexGrow: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            {/* <View style={{ ...appStyle.pad_x }}>
              <Ionicons
                name="ios-mail"
                size={32}
                color="#0a84ff"
              />
            </View> */}
            <View style={{ ...appStyle.pad_x }}>
              <Ionicons
                name="ios-compass"
                size={32}
                color="#c171e9"
              />
            </View>
            <View style={{ ...appStyle.pad_x }}>
              <Ionicons
                name="ios-information-circle"
                size={32}
                color="#c171e9"
              />
            </View>
          </View>
        </View>
      );
    };

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Store">
          <Stack.Screen
            name="Home"
            component={Browse}
            options={({ route }) => ({ title: route.params['name'] })}
          />
          <Stack.Screen
            name="Store"
            component={Store}
            options={{
              header: homeHeader
            }}
          />
          <Stack.Screen
            name="Item"
            component={ItemCard}
            options={({ route }) => ({ title: route.params['name'] })}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const appStyle = StyleSheet.create({
  pad_x: {
    paddingLeft: 10,
    paddingRight: 10
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  titleView: {
    backgroundColor: "#8000e8",
    paddingTop: 40
  },
  title: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    padding: 10
  },
  image: {
    justifyContent: "center",
    resizeMode: "contain",
    aspectRatio: 0.7
  }
});
