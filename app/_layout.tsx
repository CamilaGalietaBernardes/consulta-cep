import { Stack } from 'expo-router';
import { CepProvider } from '../src/contexts/CepContext';

export default function RootLayout() {
  return (
    <CepProvider>
      <Stack />
    </CepProvider>
  );
}
