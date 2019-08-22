import {createStackNavigator} from 'react-navigation';
import SplashView from '../view/login/SplashView';

export const StackNavigator = createStackNavigator({
  Splash: {
    screen: SplashView,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginView,
    navigationOptions: {
      header: null,
    },
  },
  Register:{
      screen:RegisterView,
      dfdf
  }
});
