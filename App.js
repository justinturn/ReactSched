import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavComponent from './component/BottomNav';

function EmptyScreen() {
  return <View />;
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={NavComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="EditPost" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;