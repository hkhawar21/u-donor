import { StyleSheet, Text, TextProps } from "react-native";

interface MyTextProps extends TextProps {
  type?: "b1" | "b2" | "b3";
  children: any;
}

export default function (props: MyTextProps) {
  const { type = "b2" } = props;
  return (
    <Text style={[styles.text, styles[type], props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
  },
  b1: {
    fontSize: 24,
  },
  b2: {
    fontSize: 20,
  },
  b3: {
    fontSize: 17,
  },
});
