import {StyleSheet} from 'react-native';

import {colors} from '/Users/student/mobiilirakendus/src/utils/colors.js';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    label: {
        color: colors.blue,
        fontWeight: '500',
        marginBottom: 8,
    },
    eye: {
        width: 24,
        height: 24,
        marginHorizontal: 16,
    },
    placeholder: {
        color: colors.lightGrey,
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalContent: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 8,
        width: '80%',
    },
    optionTitle: {
        color: colors.black,
        marginBottom: 16,
        fontSize: 16,
    },
    optionText: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 16,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: "bold",
    },
});