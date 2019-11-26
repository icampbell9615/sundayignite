import React, { Component } from 'react'
import { View, ImageBackground} from 'react-native'
import {Content, Text, Container}  from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import styles from './Styles/FoodDetailsStyles'
export default class FoodDetails extends Component {

    render() {
        return (
            <Container>
            <HeaderFood navigation={this.props.navigation}/>
            <ImageBackground source={require('../Images/burger.jpg')} style={styles.BackgroundImage}/>
           <Content style={styles.FoodContent}> 
                <View style={styles.Name}>
                    <Text style={styles.NameText}>
                        {/* {this.props.navigation.getParam('name', 'Error')} */}
                      Hello
                    </Text>
                  </View>
                  <View style={styles.Price}> 
                   <Text style={styles.PriceText}>
                     10.00 USD
                  </Text>
                </View>
            </Content> 
            </Container>
        )
    }
}