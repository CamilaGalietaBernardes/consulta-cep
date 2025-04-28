import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import CepForm from '../src/components/CepForm';
import CepResult from '../src/components/CepResult';
import Loading from '../src/components/Loading';
import NotFound from '../src/components/NotFound';
import { useCep } from '../src/contexts/CepContext';

export default function HomeScreen() {
  const { loading, notFound, address } = useCep();
  const router = useRouter(); // usamos o roteador do expo-router

  function goToHistory() {
    router.push('/history');
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Consulta de CEP
      </Text>

      <CepForm />

      {loading && <Loading />}
      {notFound && <NotFound />}
      {address && <CepResult />}

      {/* Botão para acessar o Histórico */}
      <View style={{ marginTop: 30 }}>
        <Button title="Ver Histórico de Endereços" onPress={goToHistory} />
      </View>
    </View>
  );
}
