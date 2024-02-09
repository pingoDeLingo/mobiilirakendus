import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkBlue,
        padding: 16,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '45%',
        marginBottom: 50,
        marginTop: 10,
    },
    image: {
        width: 50,
        height: 50,
    },
});