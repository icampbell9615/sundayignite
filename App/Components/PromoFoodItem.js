import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'



// Styles
import styles from './Styles/PromoFoodItemStyles'




export default class PromoFoodItem extends Component {
  render () {
    
    return (
        <TouchableOpacity onPress={()=> this.props.navigation('FoodScreen')}>
      <View style={styles.foodCard}>
          <View>
              <Image style={styles.promoImage} source={this.props.image} resizeMode={'contain'} blurRadius={5}/>
          </View>

          <View style={styles.textView}>
              <Text style={styles.foodTitle}> {this.props.text} </Text>
          </View>
      </View>
        </TouchableOpacity>
    )
  }
}
