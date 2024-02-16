import {StyleSheet} from 'react-native';

import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.black,
    },
    icon: {
        width: 24,
        height: 24,
    },
    space: {
        width: 24,
    },
});
