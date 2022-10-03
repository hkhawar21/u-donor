import React, { useState } from "react";
import { Text, MySafeAreaView, Heading, TextInput, Button } from "components";
import { Image, TouchableOpacity, View } from "react-native";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <MySafeAreaView>
      <View
        style={{
          paddingTop: "20%",
          flex: 1,
          paddingBottom: "25%",
        }}
      >
        <Image
          source={require("assets/icon.png")}
          style={{ height: 50, aspectRatio: 1 }}
        />
        <Heading
          type="h2"
          style={{
            fontFamily: "Poppins_500Medium",
            marginTop: "7%",
            marginBottom: "20%",
          }}
        >
          Sign In
        </Heading>
        <View>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="abcde@gmail.com"
            label="Email"
            style={{ marginBottom: "4%" }}
          />
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="********"
            label="Password"
            textContentType="password"
          />
        </View>
        <TouchableOpacity
          style={{
            marginTop: "8%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "25%",
          }}
        >
          <Text style={{ fontSize: 12 }}>
            Forgot your password?{" "}
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 12,
              }}
            >
              Reset now
            </Text>
          </Text>
        </TouchableOpacity>
        <Button style={{ marginBottom: "8%" }}>Sign In</Button>
        <Button outlined={true}>Create an account</Button>
      </View>
    </MySafeAreaView>
  );
}
