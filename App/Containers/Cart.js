import React, { Component } from 'react'
import { View } from 'react-native'
import {Content, Text}  from 'native-base'

import HeaderFood from '../Components/HeaderFood'

export default class Cart extends Component {

    render() {
        return (
            <View>
              <HeaderFood navigation={this.props.navigation}/>
              <View>
                  <Content>
                      
                  </Content>
              </View>
            </View>
        )
    }
}