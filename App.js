import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from '~screens/Sign';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign" component={Sign}></Stack.Screen>
      </Stack.Navigator>
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}
