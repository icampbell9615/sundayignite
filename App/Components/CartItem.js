import React, {Component} from 'react'
import {View} from 'react-native'
import { Text } from 'native-base'
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import styles from './Styles/CartItemStyles'




export default class CartItem extends Component {
render(){
    return(

<View style={styles.ItemContainer} >
<Text>{this.props.title}</Text>
        </View>
          )
        }
    }