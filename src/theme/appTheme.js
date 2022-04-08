import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalBlank: {
    flex: 2,
  },
  modalContent: {
    flex: 8,
    backgroundColor: '#EFF4FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '90%',
    height: 50,
    backgroundColor: '#2389EE',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  codefieldContainer: {
    flex: 1,
    width: '85%',
  },
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  modalButtonContainer: {
    flex: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalTextContainer: {
    flex: 2,
    paddingHorizontal: 50,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
    modalText:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6C7A8C',
    },
    notMyNumberContainer:{
        paddingVertical:40,
        marginRight:"50%",
        flex: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    notMyNumbertext:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#5FA7EE',
        
    }
});
