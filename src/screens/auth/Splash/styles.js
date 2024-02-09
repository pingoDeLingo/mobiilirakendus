import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    titleContainer: {  
        marginVertical: 54,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    innerTitle: {
        color: '#FCA34D',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    footerText: {
        color: '#4F63AC',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
    },
});