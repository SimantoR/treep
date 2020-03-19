import React, { Component } from "react";
import { Card, Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { NavProps } from '../App';
import Button from "./Button";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button as BtnCore
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    title: "Purple Kush",
    uri: require("../img/purple-kush.png"),
    description:
      "Purple Kush is a pure indica strain that emerged from the Oakland area of California as the result of crossing Hindu Kush and Purple Afghani. Its aroma is subtle and earthy with sweet overtones typical of Kush varieties. Blissful, long-lasting euphoria."
  },
  {
    title: "Bubba Kush",
    uri: require("../img/baba-kush.jpg"),
    description:
      "Bubba Kush is an indica strain that has gained notoriety in the US and beyond for its heavy tranquilizing effects. Sweet hashish flavors with subtle notes of chocolate and coffee come through on the exhale, delighting the palate as powerful relaxation takes over. From head to toe, muscles ease with heaviness as dreamy euphoria blankets the mind, crushing stress while bringing happy moods. Bubba Kush exhibits a distinctive, bulky bud structure with hues that range from forest green to pale purple.Bubba’s stocky plant stature and bulky bud structure suggest Afghani descent, but its genetic origins aren’t certain. The breeder whom this strain was named after states that Bubba Kush emerged just after 1996, when an OG Kush pollinated an unknown indica strain obtained in New Orleans. The mother plant was supposedly Northern Lights, but the genetically ambiguous indica was simply called “Bubba.” Bubba Kush has flourished from its California roots ever since."
  }
];

interface IProps {
  navigation: {
    /**
     * Navigate to given page
     */
    navigate: (
      name: string,
      params?: any
    ) => void;
  };
}

export default class Browse extends Component<NavProps> {
  render() {
    const { navigation, route: { params } } = this.props;
    console.log(this.props.navigation);
    return (
      <ScrollView style={{ marginBottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => { }} color="#56b0f5">
            <Icon name="bookmark" color="white" />
          </Button>
          <Button onPress={() => { }} color="#56b0f5">
            <Icon name="mail" color="white" />
          </Button>
        </View>
        {data.map((d, i) => (
          <Card
            key={i}
            title={d.title}
            containerStyle={styles.card}
            image={d.uri}
          >
            <View>
              <Text style={{ paddingBottom: 5 }}>
                {d.description.length < 300
                  ? d.description
                  : d.description.slice(0, 300) +
                  "..."}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around"
                }}
              >
                <Button
                  width={120}
                  color="#5a4eec"
                  title="See More..."
                  onPress={() => this.props.navigation.navigate("Item", { ...d, name: `${params.name}: ${d.title}` })}
                >
                  <Icon name="chevron-right" color="white" />
                </Button>
                {/* <Button 
                  title="Tweed" width={120} 
                  onPress={() => this.props.navigation.navigate('Item', { ...d, name: d.title })}
                >
                  <Icon name="chevron-right" color="white" />
                </Button> */}
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 30
  }
});
