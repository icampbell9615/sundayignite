import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity} from 'react-native'



// Styles
import styles from './Styles/FoodItemStyles'




export default class FoodItem extends Component {
  render () {
    
    return (
        <TouchableOpacity onPress={()=> alert("Food Item pressed")}>
    
        </TouchableOpacity>
    )
  }
}
