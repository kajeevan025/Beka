import RootNavigation from './src/Navigation/RootNavigation';
import {StackNavigationProvider} from './src/state/StackNavigationProvider';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <StackNavigationProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </StackNavigationProvider>
  );
};

export default App;
