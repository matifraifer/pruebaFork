import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wallpaper: {
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 222,
        height: 120
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
        flexDirection: 'column'
    },
    welcome: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20
    },
    buttonContainer: {
        marginTop: '40%'
    },
    button: {
        height: 43,
        backgroundColor: '#DCCB33',
        margin: '2%',
        borderRadius: 21.5,
        width: 287,
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20.83,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    }
})

export default styles;