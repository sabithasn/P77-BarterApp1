import React from 'react';
import LottieView from 'lottie-react-native';

export default class BarterAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/23211-receive-order.json')}
      style={{width:"90%",marginBottom:5}}
      autoPlay loop />
    )
  }
}