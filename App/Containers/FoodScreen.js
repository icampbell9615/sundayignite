import React, { Component } from 'react'
import { View } from 'react-native'



// Styles
import styles from './Styles/FoodScreenStyles'

import HeaderFood from '../Components/HeaderFood'

export default class FoodScreen extends Component {
  render () {
    return (
      <View>
       <HeaderFood navigation={this.props.navigation} />
       <View>
         <Text> Title</Text>
       </View>
      </View>
    )
  }
}
