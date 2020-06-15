import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Routes from './routes';
import {LoadingComponent} from './components';
import store, {AppState} from './store';

interface AppProps {}

const Container = () => {
  const systemState = useSelector<AppState, AppState['system']>(
    (state) => state.system,
  );

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <FlashMessage position="top" />
      {systemState.loading && <LoadingComponent />}
    </>
  );
};

const App: React.FC<AppProps> = ({}) => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
};

export default App;
