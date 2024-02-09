import {StyleSheet} from 'react-native';

import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    text: {
        color: colors.blue,
        fontWeight: '500',
    },
    line: {
        flex: 1,
        height: 1,
        marginVertical: 8,
        backgroundColor: colors.grey,
    },
});