import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import SpinnerModule from '../androidModule/spinnerModule';
import {LoginModal} from '../components/loginModal';
import {loginStyles} from '../theme/loginTheme';
import { validatePhoneNumber } from '../helpers/helpers';

export const LoginScreen = ({navigation}) => {
  const [modal, setModal] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [phoneNumInput, setPhoneNumInput] = useState('');
  const [codeNumInput, setCodeNumInput] = useState('');

  const codeRef = useRef();

  const getOTP = async () => {
    if (validatePhoneNumber(phoneNumInput)) {
      setModal(true);
      try {
        const confirmation = await auth().signInWithPhoneNumber(codeNumInput+phoneNumInput);
        setConfirm(confirmation);
        setPhoneNumInput('');
      } catch (e) {
        console.log(e);
      }
    } else {
      alert('Please enter a valid phone number');
    }
  };

  const onSelected = event => {
    codeRef.current = event.nativeEvent.data;
     setCodeNumInput(codeRef.current);
  };


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
      <View accessible={true} style={loginStyles.textContainer}>
        <Text style={loginStyles.loginText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.{' '}
        </Text>
      </View>
      <View style={loginStyles.numberCodeContainer}>
        <View accessible={true} style={loginStyles.codeView}>
          <Text style={loginStyles.codeText}>Code</Text>
        </View>
        <View style={loginStyles.numberView}>
          <Text accessible={true} style={loginStyles.codeText}>Number</Text>
        </View>
      </View>
      <View style={loginStyles.numberCodeInputContainer}>
        <SpinnerModule
          style={loginStyles.spinner}
          dropDownWidth={200}
          onChange={onSelected}
        />
        <View
        accessible={true}
        accessibilityLabel="Enter phone number"
        accessibilityHint="Receibes the pone number"
        >
          <TextInput
            value={phoneNumInput}
            onChangeText={val => setPhoneNumInput(val.toString())}
            style={loginStyles.numberInput}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={loginStyles.sendCodeContainer}>
        <TouchableOpacity 
        accessible={true}
        accessibilityLabel="Send Code"
        accessibilityHint="Opens the login modal"
        onPress={() => setModal(true)}>
          <Text onPress={() => getOTP()} style={loginStyles.sendCodeText}>
            Send Code
          </Text>
        </TouchableOpacity>
      </View>
      <View style={loginStyles.blankView} />
      <LoginModal navigation={navigation} isVisible={modal} confirm={confirm} setModal={setModal} />
    </View>
  );
};
