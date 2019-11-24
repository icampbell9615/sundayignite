import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {Container, Content} from 'native-base'

// Styles
import styles from './Styles/FoodScreenStyles'

import HeaderFood from '../Components/HeaderFood'

import FoodItem from '../Components/FoodItem'

export default class FoodScreen extends Component {

    componentWillMount(){
      const {navigation} = this.props;
      title = navigation.getParam('title', '');
    }

  render () {
    return (
      <Container>
       <HeaderFood navigation={this.props.navigation} />
       <Content style={styles.titleTextContent}>
       <Text style={styles.titleText}> {title}</Text>

      
          <FoodItem />
          <FoodItem />
          <FoodItem />
       </Content>
      </Container>
    )
  }
}
