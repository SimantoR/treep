import React, { Component } from "react";
import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import { Card, Rating } from "react-native-elements";
import PaymentCard from "./PaymentCard";
import Button from "./Button";
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from "react-native";

interface IProps2 extends StackNavigationProp<{}> {

}

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
  route: {
    params: any;
  };
}

const styles = StyleSheet.create({
  card: {
    fontSize: 32,
    textAlign: "center"
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

function ItemCard(props: IProps) {
  const {
    route: { params },
  } = props;

  if (params) console.log(params);

  return (
    <ScrollView>
        <View>
          <Card
            title={params.title}
            image={params.uri}
          >
            <View>
              <Text style={{ paddingBottom: 5 }}>
                {params.description}
              </Text>
            </View>
            <View style={styles.cardContainer}>
              {/* <Button
                width={150}
                color="#45a3ff"
                title="Buy It"
                onPress={() => {}}
              /> */}
              <Rating type="custom" ratingCount={5} fractions={1} startingValue={3} imageSize={25} showRating />
            </View>
          </Card>
          <View
            style={{
              padding: 10
            }}
          >
            {/* <Input placeholder="Quantity" /> */}
            <PaymentCard
              title="Popular"
              value="$ 7/g"
              buttonTitle="Buy Some"
              subMessage="Get 5% off for every 3 grams"
            />
            <PaymentCard
              title="Bulk"
              value="$ 6/g"
              buttonTitle="Light up"
              subMessage="When buying 10 grams or more"
              buttonColor="#fc8d8d"
            />
            <PaymentCard
              title="Ounce"
              value="$ 5/g"
              buttonTitle="Go Big"
            />
          </View>
        </View>
      </ScrollView>
  )
}

export default ItemCard;