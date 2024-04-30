import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    text: {
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    btnLogin: {
        margin: 8,
        padding: 15,
        paddingTop: 10,
        width: 250,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#5e0acc',
    },
    btnSignup: {
        margin: 8,
        padding: 15,
        paddingTop: 10,
        width: 250,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#3caa3c',
    },
    inputBox: {
        margin: 10,
        padding: 10,
        width: 250,
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 5,
        color: '#fff',
        backgroundColor: '#74f168',
    },
    inputBoxLogin: {
        margin: 10,
        padding: 10,
        width: 250,
        fontWeight: 'bold',
        color: '#fff',
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#b179fc',
    },
});

export default styles;