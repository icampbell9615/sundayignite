import React, { Component } from 'react'
import { View, ImageBackground} from 'react-native'
import {Content, Text, Container, Button, Icon}  from 'native-base'

import HeaderFood from '../Components/HeaderFood'
import styles from './Styles/FoodDetailsStyles'
export default class FoodDetails extends Component {

    render() {
        return (
            <Container>
            <HeaderFood navigation={this.props.navigation}/>
            <ImageBackground source={this.props.navigation.getParam('image', null)} style={styles.BackgroundImage}/>
           <Content style={styles.FoodContent}> 
                <View style={styles.NameAndPrice}>
                <View style={styles.Name}>
                    <Text style={styles.NameText}>
                        {this.props.navigation.getParam('name', 'Error')}
                     
                    </Text>
                  </View>
                  <View style={styles.Price}> 
                   <Text style={styles.PriceText}>
                     $ {this.props.navigation.getParam('price', 'Error')}
                  </Text>
                </View>
                </View>

                <Button iconLeft dark
                   style={styles.AddButton} onPress={() => {
                     alert('Test');
                   }}>
                    <Text style={styles.AddText}>
                        Add
                    </Text>
                     <Icon type="MaterialCommunityIcons" name="plus" style={styles.AddIcon}/>
                </Button>
             
            </Content> 
            </Container>
        )
    }
}