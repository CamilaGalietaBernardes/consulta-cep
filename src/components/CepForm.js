import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useCep } from '../contexts/CepContext';


export default function CepForm() {
  const [cep, setCep] = useState('');
  const { searchCep } = useCep();

  function handleSubmit() {
    searchCep(cep);
    setCep('');
  }

  return (
    <View>
      <TextInput
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={handleSubmit} />
    </View>
  );
}
