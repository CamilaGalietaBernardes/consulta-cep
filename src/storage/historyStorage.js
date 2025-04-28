import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = 'HISTORY_ADDRESSES';

export async function saveAddress(address) {
  try {
    const existing = await AsyncStorage.getItem(HISTORY_KEY);
    const addresses = existing ? JSON.parse(existing) : [];
    addresses.unshift(address); // adiciona o novo no começo
    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(addresses));
  } catch (e) {
    console.error('Erro salvando histórico', e);
  }
}

export async function loadHistory() {
  try {
    const existing = await AsyncStorage.getItem(HISTORY_KEY);
    return existing ? JSON.parse(existing) : [];
  } catch (e) {
    console.error('Erro carregando histórico', e);
    return [];
  }
}
