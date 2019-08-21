import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,PanResponder } from 'react-native';
import {
    Body,
} from 'react-game-kit/native';
import Matter from 'matter-js';
import { KEYS } from 'eslint-visitor-keys';
export default class Shape extends Component {
    GenerateRandomNumber = () => {
        return RandomNumber = Math.floor(Math.random() * 100) + 1;
        // this.setState({
        //     NumberHolder: RandomNumber
        // })
    }
    getImages=()=>{
        var Images = [];
        for (var i = 0; i < 5; i++) {
            var p = <Image 
            source={require('./assets/basketball.png')} 
            {...this._panResponder.panHandlers}
            style={{
                left:75, top: 75 * i
            }}
            ref={(i)=>i}
            ></Image>
            Images.push(p);
        }
        return Images;
    }
    componentWillMount() {
        this._panResponder = PanResponder.create({
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
          onPanResponderGrant: (evt, gestureState) => {
            this.setState({
              gravity: 0,
            });
    
            // Matter.Body.setAngularVelocity(this.body.body, 0);
            // Matter.Body.setVelocity(this.body.body, {x: 0, y: 0});
            // Matter.Body.setAngularVelocity(this.body.body, 0);
            // Matter.Body.setVelocity(this.body.body, {x: 0, y: 0});
    
            // this.startPosition = {
            //   x: this.body.body.position.x,
            //   y: this.body.body.position.y,
            // }
          },
        //   onPanResponderMove: (evt, gestureState) => {
        //     Matter.Body.setPosition(this.body.body, {
        //       x: this.startPosition.x + gestureState.dx,
        //       y: this.startPosition.y + gestureState.dy,
        //     });
        //   },
        //   onPanResponderRelease: (evt, gestureState) => {
        //     this.setState({
        //       gravity: 1,
        //     });
    
        //     Matter.Body.applyForce(this.body.body, {
        //       x: this.body.body.position.x,
        //       y: this.body.body.position.y,
        //     }, {
        //       x: gestureState.vx,
        //       y: gestureState.vy,
        //     });
        //   },
        });
      }
    render() {
        
        return (
            <View style={styles.ballStyle}>
                {this.getImages()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    ballStyle: {
        left: 100,
        top: 100,
    }
})