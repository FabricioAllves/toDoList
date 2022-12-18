import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: 153,
        backgroundColor: '#0D0D0D',
        paddingHorizontal: 16,
        justifyContent: 'center',
    },

    form: {
        flexDirection: 'row',
        width: '100%',
        position: 'relative',
        bottom: 30

    },
    input: {
        flex: 1,
        width: '100%',
        backgroundColor: '#262626',
        height: 60,
        borderRadius: 6,
        fontSize: 19,
        paddingHorizontal: 15,
        borderWidth: 0,
        color: '#fff',
        shadowColor: "#000", shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 1,
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        marginLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 16,
    },
    wraper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    wraperText:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#4EA8DE',
    },
    circleCount:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    count:{
        width: 26,
        height: 21,
        borderRadius: 9,
        backgroundColor: '#333333',
        marginLeft: 10,
        alignItems: 'center'
    },
    countText:{
        color: '#fff'
    },
})