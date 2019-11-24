import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'



// Styles
import styles from './Styles/PromoFoodItemStyles'




export default class PromoFoodItem extends Component {
  render () {
    return (
      <View style={styles.foodCard}>
          <View>
              <Image style={styles.promoImage} source={this.props.image} resizeMode={'contain'} blurRadius={5}/>
          </View>

          <View style={styles.textView}>
              <Text style={styles.foodTitle}> {this.props.text} </Text>
          </View>
      </View>
    )
  }
}
