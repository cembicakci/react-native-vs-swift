import { Provider } from 'react-redux';
import HomeScreen from './src/features/HomeScreen';
import store from './src/app/store';

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
