import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  useEffect (() => {
    
    const timer = setTimeout(() => {
      router.replace("/(drawer)/(tabs)");
     
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <ActivityIndicator size="large" color="#FFFFFF" />
     <Text style={{ marginTop: 20, color: "#FFFFFF" }}>Loading...</Text>
    </View>
  );
}
