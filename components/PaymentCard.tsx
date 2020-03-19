import React from "react";
import { Card } from "react-native-elements";
import { View, Text } from "react-native";
import Button from "./Button";

interface IProps {
  title: string;
  value: string;
  buttonTitle: string;
  subMessage?: string;
  buttonColor?: string;
}

function PaymentCard(props: IProps) {
  return (
    <Card>
      <View>
        <Text
          style={{
            color: "#45a3ff",
            fontSize: 48,
            textAlign: "center"
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            fontSize: 48,
            textAlign: "center"
          }}
        >
          {props.value}
        </Text>
        {props.subMessage && (
          <Text
            style={{
              textAlign: "center",
              color: "#d1d1d1",
              paddingTop: 5,
              paddingBottom: 5
            }}
          >
            {props.subMessage}
          </Text>
        )}
        <Button
          title={props.buttonTitle}
          color={props.buttonColor ?? "#45a3ff"}
          onPress={() => {}}
        />
      </View>
    </Card>
  );
}

export default PaymentCard;
