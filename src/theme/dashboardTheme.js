import {StyleSheet} from 'react-native';

export const dashboardStyles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#202B4A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView:{
        marginLeft:70,
        width: 180,
        height: 200,
        aspectRatio: 1 * 1.4,
    },
    dashboardBlank:{
        flex: 5,
    }
});
