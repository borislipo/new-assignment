import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        
    },
    modalBlank:{
        flex: 2,
    },
    modalContent:{
        flex: 8,
        backgroundColor: '#EFF4FB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButton:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: '90%',
        height: 50,
        backgroundColor: '#2389EE',
    },
    modalButtonText:{
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    }
});