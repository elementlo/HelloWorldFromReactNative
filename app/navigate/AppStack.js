import {createStackNavigator} from 'react-navigation';
import SplashView from '../view/login/SplashView';

export const StackNavigator = createStackNavigator(
  {
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
    Register: {
      screen: RegisterView,
      navigationOptions: {
        header: '注册',
      },
    },
    Tab: {
      screen: TabBottombar,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Splash',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#353535',
        height: 44,
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: '1',
        textAlign: 'center',
        fontSize: 18,
      },
      headerRight: <View />
    },
  },
);
