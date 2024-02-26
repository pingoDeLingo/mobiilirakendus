import {StyleSheet} from 'react-native';
import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 16,
        color: colors.blue,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
    },
    uploadContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.grey,
        borderStyle: 'dotted',
        borderRadius: 8,
        marginRight: 8,
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: colors.lightGrey,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    uploadPlus: {
        fontSize: 28,
        color: colors.white,
        marginTop: -4,
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
})