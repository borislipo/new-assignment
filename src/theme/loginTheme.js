import {StyleSheet} from 'react-native';

export const loginStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFF4FB',
  },
  imageContainer: {
    flex: 4,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    paddingHorizontal: 50,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6C7A8C',
  },
  numberCodeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codeView: {
    paddingRight: '27%',
  },
  codeText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#6C7A8C',
  },
  numberView: {
    paddingLeft: '18%',
  },
  numberCodeInputContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sendCodeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  sendCodeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#5FA7EE',
  },
  codeNumberInput: {
    width: 70,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  numberInput: {
    width: 180,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  spinner: {
    width: 120,
    height: 50,
  },
  blankView: {
    flex: 5,
  },
});
