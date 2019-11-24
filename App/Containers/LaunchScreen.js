import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'



// Styles
import styles from './Styles/LaunchScreenStyles'

import HeaderLanding from '../Components/HeaderLanding'
import PromoFoodItem from '../Components/PromoFoodItem'

let burgerImage = require('../Images/burger.jpg');
let chickenImage = require('../Images/friedchicken.jpg');
let pizzaImage = require('../Images/pizza.jpg');
let veganImage = require('../Images/vegan.jpg');

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
       <HeaderLanding/>
       <ScrollView style={styles.scroll}>
          <PromoFoodItem
          image={burgerImage}
          text={"BURGERS"}/>
          <PromoFoodItem
          image={chickenImage}
          text={"CHICKEN"}/>
          <PromoFoodItem
          image={pizzaImage}
          text={"PIZZA"}/>
          <PromoFoodItem
          image={veganImage}
          text={"VEGAN"}/>
       </ScrollView>
      </View>
    )
  }
}
