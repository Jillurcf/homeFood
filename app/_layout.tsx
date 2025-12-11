import { ShopProvider } from '@/src/store/shopStore';
import { useFonts } from 'expo-font';
import { Slot } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  const [loaded] = useFonts({
    AvenirLTProBlack: require('../assets/fonts/AvenirLTProBlack.otf'),
    AvenirLTProBlackOblique: require('../assets/fonts/AvenirLTProBlackOblique.otf'),
    AvenirLTProBook: require('../assets/fonts/AvenirLTProBook.otf'),
    AvenirLTProBookOblique: require('../assets/fonts/AvenirLTProBookOblique.otf'),
    AvenirLTProLight: require('../assets/fonts/AvenirLTProLight.otf'),
    AvenirLTProLightOblique: require('../assets/fonts/AvenirLTProLightOblique.otf'),
    AvenirLTProMedium: require('../assets/fonts/AvenirLTProMedium.otf'),
    AvenirLTProMediumOblique: require('../assets/fonts/AvenirLTProMediumOblique.otf'),
    AvenirLTProHeavy: require('../assets/fonts/AvenirLTProHeavy.otf'),
    AvenirLTProHeavyOblique: require('../assets/fonts/AvenirLTProHeavyOblique.otf'),
    AvenirLTProOblique: require('../assets/fonts/AvenirLTProOblique.otf'),
    AvenirLTProRoman: require('../assets/fonts/AvenirLTProRoman.otf'),
  });

  if (!loaded) {

    return null;
  }
  return (
    <KeyboardProvider>
      <View style={[{ flex: 1, paddingTop: insets.top, backgroundColor: 'black' }]}>
        {/* <SafeAreaView style={tw`flex-1 bg-black p-[4%]`}> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          {/* <Provider store={store}> */}
          <ShopProvider >
            <Slot />
          </ShopProvider>

          {/* </Provider> */}
        </GestureHandlerRootView>
        {/* </SafeAreaView> */}
      </View>
      {/* <StatusBar backgroundColor="black" /> */}
    </KeyboardProvider>

  )
}
