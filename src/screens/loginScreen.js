import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import SpinnerModule from '../androidModule/spinnerModule';
import {LoginModal} from '../components/loginModal';
import {loginStyles} from '../theme/loginTheme';

export const LoginScreen = ({navigation}) => {
  const [modal, setModal] = useState(false);

  const onSelected = (event) => {
    console.log(event.nativeEvent);
    
  };

  useEffect(() => {

    DeviceEventEmitter.addListener('topChange', (e) => {
      console.log(e)
      // handle event and you will get a value in event object, you can log it here
    });


  },[modal])
  return (
    <View style={loginStyles.loginContainer}>
      <View style={loginStyles.imageContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/drcoopxns/image/upload/v1649446502/safeAndSoundLogo_owfs6w.png',
          }}
          style={{width: 150, height: 135}}
        />
      </View>
      <View style={loginStyles.textContainer}>
        <Text style={loginStyles.loginText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Text>
      </View>
      <View style={loginStyles.numberCodeContainer}>
        <View style={loginStyles.codeView}>
          <Text style={loginStyles.codeText}>Code</Text>
        </View>
        <View style={loginStyles.numberView}>
          <Text style={loginStyles.codeText}>Number</Text>
        </View>
      </View>
      <View style={loginStyles.numberCodeInputContainer}>
          <SpinnerModule
          style={loginStyles.spinner}
          dropDownWidth={200}
          onPress={onSelected} 
          //probar opress
          />
        <View>
          <TextInput style={loginStyles.numberInput} keyboardType="numeric" />
        </View>
      </View>
      <View style={loginStyles.sendCodeContainer}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Text style={loginStyles.sendCodeText}>Send Code</Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles.blankView} />
      <LoginModal isVisible={modal} />
    </View>
  );
};
