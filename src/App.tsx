import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import { PermissionsChecker } from './presentation/providers/PermissionsChecker';


export const App = () => (

  <NavigationContainer>
    <PermissionsChecker>
      <StackNavigator />
    </PermissionsChecker>
  </NavigationContainer>

)

