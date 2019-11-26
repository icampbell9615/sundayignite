import React, {Component} from 'react'
import {View} from 'react-native'
import { Icon, Button, Text} from 'native-base'
// import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import styles from './Styles/CartItemStyles'




export default class CartItem extends Component {
render(){
    return(

<View style={styles.ItemContainer} >
{/* 
<SwipeListView>
   <SwipeRow
   disableRightSwipe
   rightOpenValue={-100}

     
  
       />
       </SwipeListView> */}
        </View>
          )
        }
    }