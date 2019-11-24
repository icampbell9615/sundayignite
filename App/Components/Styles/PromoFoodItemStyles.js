import { StyleSheet, Dimensions } from 'react-native'


let height = Dimensions.get('window').height;

export default StyleSheet.create({
    foodCard:{
        height: height/2,
        alignItems: 'center',
    },
    promoImage:{
        height: '100%',
    },
    textView:{
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    foodTitle:{
        fontSize: 36,
        color: 'white',
        fontWeight: "bold",
        textAlign: 'center',
        borderWidth: 1,
        marginLeft: "20%",
        marginRight: '20%',
        borderRadius: 10,
        paddingTop: '5%',
        paddingBottom: '5%'

    },
})
