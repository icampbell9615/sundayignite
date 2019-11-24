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
 
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
       <HeaderLanding/>
       <ScrollView style={styles.scroll}>

          <PromoFoodItem
          navigation={navigate}
          image={burgerImage}
          text={"BURGERS"}/>
          
          <PromoFoodItem          
          navigation={navigate}
          image={chickenImage}
          text={"CHICKEN"}/>

          <PromoFoodItem
          navigation={navigate}
          image={pizzaImage}
          text={"PIZZA"}/>

          <PromoFoodItem
          navigation={navigate}
          image={veganImage}
          text={"VEGAN"}/>

       </ScrollView>
      </View>
    )
  }
}
