import { CepProvider } from './app/contexts/CepContext';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <CepProvider>
      <AppNavigator />
    </CepProvider>
  );
}
