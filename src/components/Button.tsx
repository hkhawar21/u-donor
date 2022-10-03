import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Text from "./Text";
import { useTheme } from "providers/ThemeProvider";

interface ButtonProps extends TouchableOpacityProps {
  children?: any;
  textStyle?: TextStyle;
  loading?: boolean;
  textProps?: TextProps;
  outlined?: boolean;
  style?: ViewStyle;
}

export default function (props: ButtonProps) {
  const { lightGray, shadow, primaryColor, black } = useTheme();
  const {
    children,
    textStyle,
    textProps,
    loading = false,
    disabled = false,
    outlined = false,
    style,
  } = props;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: outlined ? "transparent" : primaryColor,
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      ...shadow,
      shadowColor: outlined ? black : primaryColor,
      borderWidth: 1,
      borderColor: outlined ? black : primaryColor,
    },
    text: {
      color: outlined ? black : "#fff",
      fontSize: 14,
      textTransform: "uppercase",
      fontFamily: "Poppins_600SemiBold",
    },
    disabled: {
      backgroundColor: lightGray,
    },
  });

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      {...props}
      style={[styles.button, style]}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[styles.text, textStyle]} {...textProps}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
