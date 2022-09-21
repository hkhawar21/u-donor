import React from "react";
import { View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

type MySafeAreaViewProps = {
  children: any;
};

export default function ({ children }: MySafeAreaViewProps) {
  return (
    <View
      style={{
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: 20,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
}
