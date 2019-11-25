import { StyleSheet, Dimensions } from 'react-native'


let height = Dimensions.get('window').height;
let width = Dimensions.get('window').height;

let scale =height/width;

export default StyleSheet.create({
   foodItemView:{
       height: '100%',
       width: height/4,
       paddingLeft: '-5%',
       paddingTop: '5%',
   },

   priceView:{
       backgroundColor: 'grey',
       height: '40%',
       width: '30%',
       borderRadius: 10,
       justifyContent: 'center',
       zIndex: 5,
   },
   priceText:{
       color: 'white',
       fontSize: 24,
       textAlign: 'center',
       fontWeight: "400",
   },
   foodImageView:{
       width: '60%',
       height: '90%',
       position: 'absolute',
       paddingTop: '15%',
       paddingLeft: '10%',
   },
   foodImage:{
      width: '100%',
       height: '140%',
       borderRadius: 40,
   },
   foodDescriptionView:{
       height: '120%',
       width: '110%',
       position: 'absolute',
       zIndex: -1,
       marginLeft: '35%',
       margin: '5%',
       borderRadius: 40,
       backgroundColor: '#F4F4F4',
   },
   foodTextView:{
    position: 'absolute',
    width: '50%',
    height: '100%',
    zIndex: 1,
    marginLeft: '40%',
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
    fontSize: scale * 5,
   },

})
