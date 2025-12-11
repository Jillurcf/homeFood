import { IconCloseEye, IconEnvelope, iconLock, IconOpenEye } from '@/assets/Icons/Icon';
import Button from '@/src/components/Button';
import InputText from '@/src/components/InputText';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';


const login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [checkValue, setCheckValue] = useState(false);
  const [loginError, setLoginError] = useState();
  const [errorFromRes, setErrorFromRes] = useState();

  const allFilled =
    email.trim() !== '' &&
    password.trim() !== ''

  console.table(allFilled, "allFilled")
 
  const handleLogin = () => {

    console.log('Logging in with:', { email, password });
    router.push('/(drawer)/(tabs)');
  }
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={tw`flex-1 bg-black px-[4%] justify-between min-h-screen`}
    >
      <View style={tw`mt-[4%]`}>
        {/* ====================== Logo ==================== */}
        <View style={tw` justify-center items-center`}>
          <Image
            source={require("../../assets/images/logo.png")}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
          />
        </View>

        <View style={tw`items-center`}>
          <Text style={tw`text-white font-AvenirLTProBlack text-2xl`}>
            Please Login
          </Text>
        </View>

        <View style={tw`mt-[4%]`}>
          <InputText
            cursorColor="white"
            style={tw`text-white`}
            containerStyle={tw`bg-none h-14 border-b border-[#565358]`}
            labelStyle={tw`text-white font-AvenirLTProBlack mt-3`}
            placeholder={'Write it here'}
            placeholderColor={'#949494'}
            label={'Email'}
            iconLeft={IconEnvelope}
            onChangeText={setEmail}
          />

          <InputText
            cursorColor="white"
            selectionColor="white"
            style={tw`text-white`}
            containerStyle={tw`bg-none h-14 border-b border-[#565358]`}
            labelStyle={tw`text-white font-AvenirLTProBlack mt-3`}
            placeholder={'Write it here'}
            placeholderColor={'#949494'}
            label={'Password'}
            iconLeft={iconLock}
            iconRight={isShowPassword ? IconOpenEye : IconCloseEye}
            onChangeText={setPassword}
            isShowPassword={!isShowPassword}
            rightIconPress={() => setIsShowPassword(!isShowPassword)}
          />
        </View>
        <View style={tw`flex-row gap-1`}>
          <Text style={tw`text-white text-xs font-AvenirLTProBlack`}>Do not have an account please </Text>
          <TouchableOpacity onPress={() => router.push({ pathname: "/(auth)/Signup", params: { screenName: "signup" } })}>
            <Text style={tw`text-gray-400 text-xs underline font-AvenirLTProBlack`}>Signup</Text>
          </TouchableOpacity>
        </View>

        <View style={tw`mt-4 flex-row gap-2`}>
          <Text style={tw`text-white font-AvenirLTProBlack`}>
            By logging in you accept our
          </Text>
          <TouchableOpacity
            onPress={() => router.push('/screens/TermsAndCondition')}
          >
            <Text style={tw`text-gray-400 font-AvenirLTProBlack underline`}>TOS</Text>
          </TouchableOpacity>
          <Text style={tw`text-white font-AvenirLTProBlack`}>&</Text>
          <TouchableOpacity
            onPress={() => router.push('/screens/PrivacyPolicay')}
          >
            <Text style={tw`text-gray-400 font-AvenirLTProBlack underline`}>PP</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: '/(auth)/EmailVerification',
              params: { screenName: 'forgetPass' },
            })
          }
          style={tw`mt-4`}
        >
          <Text style={tw`text-white font-AvenirLTProBlack`}>Forget password</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={tw`flex-col justify-end`}>
        {/* {loginError ? (
          <Text style={tw`text-red-500 text-center mb-4`}>
            {loginError}*
          </Text>
        ) : null}

        {errorFromRes ? (
          <Text style={tw`text-red-500 text-center mb-4`}>
            {errorFromRes}*
          </Text>
        ) : null} */}
        <Button
        
          title={'Continue'}
         
          containerStyle={tw`bg-white h-14 justify-center rounded-2xl`}
          onPress={handleLogin}
        />
        {/* <Button
          disabled={!allFilled}
          title={isLoading ? 'Wait...' : 'Continue'}
          style={tw`${allFilled ? 'text-black' : 'text-gray-500'} font-AvenirLTProBlack items-center`}
          containerStyle={tw`${allFilled ? 'bg-white' : 'bg-PrimaryFocus'} my-4 h-14 rounded-2xl justify-center`}
          onPress={handleLogin}
        /> */}
      </View>

      <StatusBar backgroundColor="black" translucent={false} />
    </KeyboardAwareScrollView>
  );
}

export default login

const styles = StyleSheet.create({})