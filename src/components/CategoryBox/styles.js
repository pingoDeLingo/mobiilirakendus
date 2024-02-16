import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: colors.lightGrey,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    image: {
        height: 32,
        width: 32,
    },
    title: {
        color: colors.grey,
    },
});