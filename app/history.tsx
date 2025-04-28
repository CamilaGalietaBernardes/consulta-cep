import { View, Text, FlatList, Button } from 'react-native';
import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useCep } from '../src/contexts/CepContext';

export default function HistoryScreen() {
  const { history, loadSavedHistory } = useCep();
  const router = useRouter();

  useEffect(() => {
    loadSavedHistory();
  }, []);

  function goBack() {
    router.back();
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        Histórico de Endereços
      </Text>

      {history.length === 0 ? (
        <Text>Nenhum endereço consultado ainda.</Text>
      ) : (
        <FlatList
          data={history}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Text>{item.logradouro}, {item.localidade} - {item.uf}</Text>
            </View>
          )}
        />
      )}

      <View style={{ marginTop: 30 }}>
        <Button title="Voltar" onPress={goBack} />
      </View>
    </View>
  );
}
