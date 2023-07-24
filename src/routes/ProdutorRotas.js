import { createStackNavigator } from '@react-navigation/stack';
import Home from '../telas/Home';
import Produtor from '../telas/Produtor';
const Tab = createStackNavigator();

export default function ProdutorRotas() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name='HomeScreen' component={Home} />
      <Tab.Screen name='Produtor' component={Produtor} />
    </Tab.Navigator>
  );
}
