import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BaseComponent from '../../component/BaseComponent';
import AsyncStorageUtil from '../../util/AsyncStorageUtil';

class SplashView extends BaseComponent {
  static navigationOptions = {
    headerStyle: {
      height: 0,
    },
  };

  componentDidMount() {
      this.timer = setTimeout(()=>{
          AsyncStorageUtil.getValue();
      })
  }
}
export default SplashView;
