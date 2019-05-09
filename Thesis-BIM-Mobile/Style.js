import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        height: 30,
        paddingLeft: 5,
    },
    form: {
        width: 80 + '%',
        textAlign: 'left',
    },
    startButton: {
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: 'black',
        height: 30,
        width: 50 + '%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        borderRadius: 7,
        marginTop: 10,
        backgroundColor: 'black',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});