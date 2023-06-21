import * as eva from "@eva-design/eva";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigationTab, ApplicationProvider, BottomNavigation } from '@ui-kitten/components';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Notes from "./Components/Notes";
import NewNote from "./Components/NewNote";
import Note from "./Components/Note";

const Tab = createMaterialBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation selectedIndex={state.index} onSelect={(index) => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="New Note" />
    <BottomNavigationTab title="Notes" />
  </BottomNavigation>
)


const TabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomTabBar  {...props} />}>
    <Tab.Screen name="New Note" component={NewNote} />
    <Tab.Screen name="Notes" component={Notes} />
    <Tab.Screen name="Note" component={Note} options={() => ({
      tabBarStyle: {
        display: "none",
      },
      tabBarButton: () => null,
    })} />
  </Tab.Navigator>

)

export default function App() {

  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer >
        <TabNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "blue"
  }
});
