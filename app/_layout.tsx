import { Slot } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardProvider>
      <View style={[{ flex: 1, paddingTop: insets.top, backgroundColor: 'black' }]}>
        {/* <SafeAreaView style={tw`flex-1 bg-black p-[4%]`}> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          {/* <Provider store={store}> */}
            <Slot />
          {/* </Provider> */}
        </GestureHandlerRootView>
        {/* </SafeAreaView> */}
      </View>
      {/* <StatusBar backgroundColor="black" /> */}
    </KeyboardProvider>

  )
}
