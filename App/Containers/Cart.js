import React, { Component } from 'react'
import { View } from 'react-native'
import { Content, Text }  from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import CartItem from '../Components/CartItem'

import styles from './Styles/CartStyles'

export default class Cart extends Component {

    render() {
        return (
            <View>
              <HeaderFood navigation={this.props.navigation}/>
              <View style={styles.ParentView}>
                  <Content>
                  <CartItem title={'BBQ Burger'}/>  
                  <CartItem title={'Spicey Burger'}/>  
                  <CartItem title={'Large Burger'}/>  
                  </Content>
                  <View style={styles.FooterContainer}>
                     <Text style={styles.FooterText}>
                         Total:
                     </Text>
                  </View>
              </View>
        </View>
        )
    }
}