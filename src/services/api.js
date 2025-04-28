export async function fetchAddress(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) {
    throw new Error('Erro na requisição');
  }
  const data = await response.json();
  if (data.erro) {
    throw new Error('CEP não encontrado');
  }
  return data;
}
