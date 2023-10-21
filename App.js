// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';

import Splash from './src/screens/splash';
import Welcome from './src/screens/welcome';
import Login from './src/screens/login';
// const Stack = createStackNavigator();

const App = () => {
  return (
      <Login />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="splash">
    //     <Stack.Screen name="splash" component={Splash} />
    //     <Stack.Screen name="login" component={Login} />
    //     {/* <Stack.Screen name="signup" component={SignUp} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
