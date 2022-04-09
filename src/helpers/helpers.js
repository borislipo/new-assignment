export const verifyCode = async (code, navigation) => {
  if (value.length === 6) {
    try {
      const result = await confirm.confirm(code);
      if (result) {
        navigation.navigate('DashboardScreen');
      }
    } catch (e) {
      alert(e);
    }
  } else {
    alert('Please enter a valid code');
  }
};


export const validatePhoneNumber = phoneNumber => {
    const regex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/g;
    return regex.test(phoneNumber);
  };


export const getOTP = async (phoneNumber, auth, setConfirm, setModal) => {
  if (validatePhoneNumber(phoneNumber) ) {
    setModal(true);
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      alert(JSON.stringify(e));
    }
  } else {
    alert('Please enter a valid phone number');
  }
};
