import { createAppContainer } from 'react-native';
import { createStackNavigator } from 'react-native-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Profile,
  })
);

export default Routes;