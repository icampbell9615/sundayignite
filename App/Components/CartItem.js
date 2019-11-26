import React, {Component} from 'react'
import {View} from 'react-native'
// import { Icon, Button} from 'native-base'
// import { SwipeListView } from 'react-native-swipe-list-view';

import styles from './Styles/CartItemStyles'




export default class CartItem extends Component {
render(){
    return(

<View style={styles.ItemContainer} >

{/* <SwipeListView
            data={this.state.listViewData}
            renderItem={ (data, rowMap) => (
                <View style={styles.rowFront}>
                    <Text>I am {data.item} in a SwipeListView</Text>
                </View>
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                    <Text>Left</Text>
                    <Text>Right</Text>
                </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
        /> */}
        </View>
          )
        }
    }