import { useTheme } from "providers/ThemeProvider";
import React, { useState } from "react";
import {
  TextInputProps,
  TextInput as NativeTextInput,
  View,
  StyleSheet,
} from "react-native";
import { Eye, EyeOff } from "react-native-feather";

export default function TextInput(props: TextInputProps) {
  const { textContentType, style } = props;
  const { primaryColor, shadow } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [focus, setFocus] = useState(false);

  const showPassword = passwordVisible || textContentType != "password";
  const isPasswordField = textContentType == "password";

  const containerFocus = {
    borderColor: primaryColor,
    borderWidth: 3,
    ...shadow,
    shadowColor: primaryColor,
  };

  function EyeIcon() {
    if (showPassword)
      return <Eye color="black" onPress={() => setPasswordVisible(false)} />;
    return <EyeOff color="black" onPress={() => setPasswordVisible(true)} />;
  }

  return (
    <View style={[styles.container, focus ? containerFocus : null, style]}>
      <NativeTextInput
        secureTextEntry={!showPassword}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...props}
        style={[styles.input]}
      />
      {isPasswordField ? <EyeIcon /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    borderRadius: 5,
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  input: {
    flex: 1,
    fontSize: 20,
  },
});
