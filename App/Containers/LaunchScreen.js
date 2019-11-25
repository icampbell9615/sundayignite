import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Drawer } from 'native-base'
import Sidebar from '../Containers/Sidebar'

// Styles
import styles from './Styles/LaunchScreenStyles'

import HeaderLanding from '../Components/HeaderLanding'
import PromoFoodItem from '../Components/PromoFoodItem'

let burgerImage = require('../Images/burger.jpg');
let chickenImage = require('../Images/friedchicken.jpg');
let pizzaImage = require('../Images/pizza.jpg');
let veganImage = require('../Images/vegan.jpg');

export default class LaunchScreen extends Component {


   closeDrawer = () => {
     this.drawer._root.close();
   }

   openDrawer = () => {
     this.drawer._root.open();
   }




  render () {
 
    const { navigate } = this.props.navigation;

    return (
      <Drawer
        ref={(ref)=> {this.drawer = ref; }}
        content={
          <Sidebar
          />
        }
        onClose={()=> this.closeDrawer()}
        >
      <View style={styles.mainContainer}>
       <HeaderLanding openDrawer={this.openDrawer}/>
       <ScrollView style={styles.scroll}>

          <PromoFoodItem
          navigation={navigate}
          image={burgerImage}
          foodTitles={["BBQ Burger", "Spicy Burger", "Big burger"]}
          foodDescriptions={["An awesome BBQ burger",  "A very spicy burger", "A very large burger"]}
          prices={["10", "14", "15"]}
          images={[burgerImage, chickenImage, pizzaImage]}
          foodSize={3}
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
      </Drawer>
    )
  }
}
