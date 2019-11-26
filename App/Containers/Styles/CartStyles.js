import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
   ...ApplicationStyles.screen,
 ParentView: {
     height:'100%',
     width: '100%',
 },
 FooterContainer: {
     height: 250,
     width: '100%',
     backgroundColor: 'orange',
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     
 },
 FooterText: {
     width: '100%',
     textAlign: 'center',
     color: 'white',
     fontSize: 24,
     marginTop: 5,
 }
})
