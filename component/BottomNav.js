import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableExample from './Grid';
import MyComponent from './DatatableComp'
import FlatListBasics from './List';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const colortouse = "rgb(255,64,25)";
const sizetouse = "";

function Profile({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          onPress={() => navigation.navigate('EditPost')}
          title="Go to Edit Post"
        />
      </View>
    );
  }
  
  function EmptyScreen() {
    return <View />;
  }
  
  function GenerateGrid() {
      return <View>
          <TableExample></TableExample>
      </View>
    
    }
  function GenerateGrid2() {
  return      <View>
  <MyComponent></MyComponent>
  </View>
  }
  
  function GenerateFlatList(){
    return <View>
      <FlatListBasics></FlatListBasics>
    </View>
  }

const NavComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Schedule" component={GenerateGrid2} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="calendar" color={colortouse} size={sizetouse} />
      ),
    }}/>
      {/* <Tab.Screen name="Settings" component={EmptyScreen} /> */}
      {/* <Tab.Screen name="Flat List" component={GenerateFlatList} /> */}

      <Tab.Screen name="Flat List" component={GenerateFlatList} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="list" color={colortouse} size={sizetouse} />
      ),
    }}/>

      <Tab.Screen name="TEST" component={GenerateGrid} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="home" color={colortouse} size={sizetouse} />
      ),
    }}
  />
    </Tab.Navigator>
  );
}
export default NavComponent;