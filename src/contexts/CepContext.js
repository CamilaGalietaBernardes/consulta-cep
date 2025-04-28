import { createContext, useState, useContext } from 'react';
import { fetchAddress } from '../services/api';
import { saveAddress, loadHistory } from '../storage/historyStorage';

const CepContext = createContext();

export function CepProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  async function searchCep(cep) {
    setLoading(true);
    setNotFound(false);
    try {
      const data = await fetchAddress(cep);
      setAddress(data);
      await saveAddress(data);
    } catch (error) {
      console.error(error.message);
      setNotFound(true);
      setAddress(null);
    } finally {
      setLoading(false);
    }
  }

  async function loadSavedHistory() {
    const saved = await loadHistory();
    setHistory(saved);
  }

  return (
    <CepContext.Provider value={{ address, history, loading, notFound, searchCep, loadSavedHistory }}>
      {children}
    </CepContext.Provider>
  );
}

export function useCep() {
  return useContext(CepContext);
}
