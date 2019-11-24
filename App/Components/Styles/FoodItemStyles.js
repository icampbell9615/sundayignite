import { StyleSheet, Dimensions } from 'react-native'


let height = Dimensions.get('window').height;

export default StyleSheet.create({
   foodItemView:{
       height: '100%',
       width: height/4,
       paddingLeft: '5%',
       paddingTop: '5%',
   },

   priceView:{
       backgroundColor: 'grey',
       height: '20%',
       width: '40%',
       borderRadius: 10,
       justifyContent: 'center',
       zIndex: 5,
   },
   priceText:{
       color: 'white',
       fontSize: 24,
       textAlign: 'center',
       fontWeight: '400',
   },
   foodImageView:{
       width: '60%',
       height: '70%',
       position: 'absolute',
       paddingTop: '15%',
       paddingLeft: '10%',
   },
   foodImage:{
      width: '120%',
       height: '110%',
       borderRadius: 40,
   },
   foodDescriptionView:{
       height: '50%',
       width: '100%',
     
       zIndex: -1,
       marginLeft: '40%',
       marginTop: '-5%',
       borderRadius: 40,
       backgroundColor: '#F4F4F4',
   },
   foodTextView:{
    position: 'absolute',
    width: '50%',
    height: '100%',
    zIndex: 1,
    marginLeft: '20%',
   },
   foodTitle:{
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
   },
   foodDescription:{
    textAlign: 'center',
    fontWeight: '400',
    paddingTop: 5,
    fontSize: 16
   },

})
