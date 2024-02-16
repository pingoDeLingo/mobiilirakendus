import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

const {width} = Dimensions.get('window');
console.log(width);

export const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    title: {
        color: colors.textGrey,
        paddingVertical: 8
    },
    image: {
        height: 220,
        width: (width-76) / 2,
        borderRadius: 8,
    },
    price: {
        color: colors.black,
        paddingBottom: 8,
    },
    });