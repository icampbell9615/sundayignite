import React, { Component } from 'react'
import { View } from 'react-native'

import {Container, Content} from 'native-base'

// Styles
import styles from './Styles/FoodScreenStyles'

import HeaderFood from '../Components/HeaderFood'

export default class FoodScreen extends Component {

    componentWillMount(){
      const {navigation} = this.props;
      title = navigation.getParam('title', '');
    }

  render () {
    return (
      <View>
       <HeaderFood navigation={this.props.navigation} />
       <Content style={styles.title.text}>
    <Text style={styles.titleText}> {title} </Text>
       </Content>
      </View>
    )
  }
}
