import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import pages
import Home from './src/page/Home';
import Order from './src/page/Order';
import Orders from './src/page/Orders';
import Notifications from './src/page/Notifications';
import SignIn from './src/page/SignIn';
import SignUp from './src/page/SignUp';
import Header from './src/page/Header';

// import { Provider } from 'react-redux';
// import store from './store';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    // <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        <Header />
      </NavigationContainer>
    // </Provider>
  );
}

export default App;
