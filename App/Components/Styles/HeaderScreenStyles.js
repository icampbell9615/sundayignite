import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    headerStyle: {
       backgroundColor: 'orange',
       justifyContent: 'center'
    },
    iconStyle:{
       color: 'black',
       fontSize: 30,
    },
    titleText:{
        fontSize: 21,
        fontStyle: "italic",
        fontWeight: '400',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
    },
    headerContainer:{
       height: 'ios' ? '10%' : '8%',
       flex: 0,
       zIndex: 5,
       
    },
    bodyStyle:{
       flexDirection: 'row',
       flex:1,
       justifyContent: 'center',
    },

})