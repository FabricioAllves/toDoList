import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        height: 70,
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',


    },
    
    cardText: {
        color: '#f2f2f2',
        paddingRight: 110

    },
    cardButton: {

        width: 50,
        height: 64,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardButton2: {
        position: 'absolute',
        right: 0,
        width: 50,
        height: 64,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }
})