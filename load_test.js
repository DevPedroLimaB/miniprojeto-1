import http from 'k6/http';
import { sleep, check } from 'k6';

// Configurações do teste: simula diferentes níveis de carga.
export let options = {
  stages: [
    { duration: '30s', target: 10 },  // Cenário Leve: 10 usuários simultâneos.
    { duration: '1m', target: 50 },  // Cenário Moderado: 50 usuários simultâneos.
    { duration: '1m', target: 100 }, // Cenário Intenso: 100 usuários simultâneos.
    { duration: '30s', target: 0 },  // Redução gradual de carga.
  ],
};

// Função principal executada para cada usuário simulado.
export default function () {
  // Substitua pela URL do seu endpoint
  let res = http.get('https://jsonplaceholder.typicode.com/posts');

  // Validação das respostas
  check(res, {
    'status é 200': (r) => r.status === 200,
    'tempo de resposta menor que 200ms': (r) => r.timings.duration < 200,
  });

  // Pausa entre as requisições
  sleep(1);
}
