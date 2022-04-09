import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

export const LoginModal = ({isVisible}) => {
  const [modalVisible, setModalVisible] = useState(null);

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modal}>
          <View style={styles.modalBlank} />
          <View style={styles.modalContent}>
            <View style={styles.modalTextContainer}>
              <Text style={styles.modalText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{' '}
              </Text>
            </View>
            <View style={styles.modalText}>
              <Text style={styles.modalText}>Security code</Text>
            </View>
            <View style={styles.codefieldContainer}>
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
              onPress={() => setModalVisible(false)}
              >
                <Text style={styles.notMyNumbertext}>{"< Not my number"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
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
