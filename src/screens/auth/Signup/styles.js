import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        padding: 12,
        height: '100%',
        flexDirection: 'column',
        borderWidth: 1,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText:{
        color: colors.blue,
        marginHorizontal: 14,
    },
    button: {
        marginVertical: 16,
    },
});