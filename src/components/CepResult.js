import { View, Text, Linking, Button } from 'react-native';
import { useCep } from '../contexts/CepContext';

export default function CepResult() {
  const { address } = useCep();

  if (!address) return null;

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${address.logradouro}, ${address.localidade}, ${address.uf}`
    )}`;
    Linking.openURL(url);
  };

  return (
    <View>
      <Text>Rua: {address.logradouro}</Text>
      <Text>Bairro: {address.bairro}</Text>
      <Text>Cidade: {address.localidade}</Text>
      <Text>Estado: {address.uf}</Text>
      <Text>CEP: {address.cep}</Text>

      <Button title="Traçar rota no Google Maps" onPress={openGoogleMaps} />
    </View>
  );
}
