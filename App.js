import {RootStack} from './app/navigate/AppStack';
import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <RootStack />;
  }
}
