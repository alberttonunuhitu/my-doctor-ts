import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import Routes from './routes';
import {LoadingComponent} from './components';
import store, {RootState} from './store';

interface AppProps {}

const Container = () => {
  const isLoading = useSelector((state: RootState) => state.system.loading);

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <FlashMessage position="top" />
      {isLoading && <LoadingComponent />}
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
