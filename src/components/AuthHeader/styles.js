import {StyleSheet} from 'react-native';

import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 18,
        height: 18,

    },
    title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '500',
    paddingHorizontal: 16,
    },
});