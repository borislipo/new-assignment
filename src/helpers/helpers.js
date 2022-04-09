export const validatePhoneNumber = phoneNumber => {
    const regex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/g;
    return regex.test(phoneNumber);
  };
