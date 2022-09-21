import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextProps,
  TextStyle,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { Text } from "components";
import { useTheme } from "providers/ThemeProvider";

interface ButtonProps extends TouchableOpacityProps {
  children?: any;
  textStyle?: TextStyle;
  loading?: boolean;
  textProps?: TextProps;
}

export default function (props: ButtonProps) {
  const { lightGray, shadow, primaryColor } = useTheme();
  const {
    children,
    textStyle,
    textProps,
    loading = false,
    disabled = false,
  } = props;

  const styles = StyleSheet.create({
    button: {
      backgroundColor: primaryColor,
      padding: 15,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      ...shadow,
    },
    text: {
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    disabled: {
      backgroundColor: lightGray,
    },
  });

  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[styles.button, props.style]}
      {...props}
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
