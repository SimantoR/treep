import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

interface IProps {
  title?: string;
  onPress: () => void;
  color?: string;
  width?: number;
  fontColor?: string;
}

const Button: FC<IProps> = props => {
  const viewStyle: StyleProp<ViewStyle> = {
    ...buttonStyle.loginScreenButton,
    backgroundColor: props.color ?? "#c171e9",
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  };

  if (props.width) viewStyle.width = props.width;

  return (
    <TouchableOpacity
      style={viewStyle}
      onPress={props.onPress}
    >
      {props.title && (
        <Text
          style={{
            ...buttonStyle.title,
            color: props.fontColor ?? "white"
          }}
        >
          {props.title}
        </Text>
      )}
      {props.children}
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  loginScreenButton: {
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "#9c9c9c",
    shadowRadius: 20,
    shadowOpacity: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff"
  },
  title: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default Button;
