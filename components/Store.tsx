import React, { Component } from "react";
import Image from "react-native-scalable-image";
import { Card } from "react-native-elements";
import { NavProps } from '../App';
import Button from './Button';
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Button as ButtonCore
} from "react-native";

export default class Store extends Component<NavProps> {
  render() {
    const { navigation } = this.props;
    const navToStore = () => navigation.navigate('Home', { name: 'Tweed' });
    return (
      <ScrollView>
        <Card
          image={require("../img/weed.jpg")}
          imageStyle={{ borderRadius: 5 }}
          containerStyle={{ borderRadius: 5 }}
        >
          <View style={{
            position: 'absolute',
            left: 5, top: -40,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5, padding: 5, margin: 5
          }}>
            <Image width={75} source={require('../img/tweed.png')} onPress={navToStore} />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 5, paddingBottom: 5 }}>
            <View>
              {/* <Button color="#d6d6d6" fontColor="#2e2e2e" title="Tweed" onPress={() => navigation.navigate('Home', { name: 'Tweed' })} /> */}
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Tweed
              </Text>
              <Text style={{ color: 'gray' }}>
                20 - 30 mins
              </Text>
              <Text style={{ color: 'gray' }}>
                $ 3.99
              </Text>
            </View>
            <View>
              {/* <Button title="8.4" color="#f2837c" onPress={() => { }} /> */}
              <Button title="Go To Store" color="#6899c4" onPress={navToStore} />
            </View>
          </View>
        </Card>
      </ScrollView>
    );
  }
}
