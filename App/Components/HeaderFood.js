import React, { Component } from 'react'
import { Text } from 'react-native'
import {Container, Header, Left, Body, Right, Button, Icon} from 'native-base'

// Styles
import styles from './Styles/HeaderScreenStyles'

export default class HeaderLanding extends Component {
  render () {
    return (
      <Container style={styles.headerContainer}>
       <Header style={styles.headerStyle}>
           <Left>
               <Button transparent onPress={()=> this.props.navigation.goBack()}>
                   <Icon style={styles.iconStyle} name="md-arrow-back"/>
               </Button>
           </Left>

           <Body>
             <Text style={styles.titleText}>Title </Text>
           </Body>

           <Right>
             <Button transparent onPress={()=> this.props.navigation.navigate('Cart')}>
                 <Icon style={styles.iconStyle} type="FontAwesome" name="shopping-cart"/>
            </Button>
           </Right>

       </Header>
      </Container>
    )
  }
}
