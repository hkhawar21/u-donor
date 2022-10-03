import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface MyTextProps extends TextProps {
  type?: "h1" | "h2" | "h3" | "h4";
  children: any;
}

export default function (props: MyTextProps) {
  const { type = "h2" } = props;
  return (
    <Text style={[styles.text, styles[type], props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_700Bold",
    color: "#121212",
  },
  h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 32,
  },
  h3: {
    fontSize: 28,
  },
  h4: {
    fontSize: 24,
  },
});
