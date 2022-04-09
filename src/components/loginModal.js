import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';


export const LoginModal = ({isVisible, confirm, navigation, setModal}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  
  const CELL_COUNT = 6;

  const verifyCode = async () => {
    if (value.length === CELL_COUNT) {
      try {
        const result = await confirm.confirm(value);
        if (result) {
          navigation.navigate('DashboardScreen');
        }
      } catch (e) {
        alert(e);
      }
    }else{
      alert('Please enter a valid code');
    }
  };

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modalBlank} />
          <View style={styles.modalContent}>
            <View accessible={true} style={styles.modalTextContainer}>
              <Text style={styles.modalText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </Text>
            </View>
            <View accessible={true} style={styles.modalText}>
              <Text style={styles.modalText}>Security code</Text>
            </View>
            <View accessible={true} 
            accessibilityLabel="Enter Code"
            accessibilityHint="Receives the code sent to your phone"
            style={styles.codefieldContainer}>
              <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </View>
            <View style={styles.notMyNumberContainer}>
              <TouchableOpacity
              accessible={true} 
              accessibilityLabel="Back to login"
              accessibilityHint="Go back to login page"
              onPress={() => setModal(false)}
              >
                <Text style={styles.notMyNumbertext}>{'< Not my number'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
              accessible={true} 
              accessibilityLabel="Send Code"
              accessibilityHint="Checks the code and sends you to the dashboard"
                onPress={() => verifyCode()}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
