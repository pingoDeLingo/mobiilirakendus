import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGray,
        padding: 16,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: '45%',
        marginBottom: 50,
    },
    image: {
        width: 50,
        height: 50,
    },
});