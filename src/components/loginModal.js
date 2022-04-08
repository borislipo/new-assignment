import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity, Button} from 'react-native';
import {styles} from '../theme/appTheme';

export const LoginModal = ({isVisible}) => {
  const [modalVisible, setModalVisible] = useState(null);
  return (
    <View>
      <Button title="Show Login Modal" onPress={() => setModalVisible(true)} />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalBlank} />
          <View style={styles.modalContent}>
            <Text>Login Screen</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
