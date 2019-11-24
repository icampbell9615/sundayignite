import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'

// Styles
import styles from './Styles/FoodItemStyles'

let burger = require('../Images/burger.jpg');
export default class FoodItem extends Component {
  render () {
    
    return (
        <TouchableOpacity onPress={()=> alert("Food Item pressed")}>
           <View style={styles.foodItemView}> 
               
           <View style={styles.priceView}>
               <Text style={styles.priceText}>10</Text> 
          </View>


             <View style={styles.foodImageView}>
                 <Image style={styles.foodImage} source={burger} resizeMode='cover'/>
             </View>


             <View style={styles.foodDescriptionView}>
             <View style={styles.foodTextView}>
               <Text style={styles.foodTitle}>Title</Text>
               <Text style={styles.foodDescription}>Some type of description</Text>
            </View>

            </View>

           </View>
             

        
               
     
        </TouchableOpacity>
    )
  }
}
