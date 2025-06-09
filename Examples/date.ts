const data1 = new Date('2023-10-01T00:00:00Z').toLocaleDateString('pt-BR', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'America/Sao_Paulo',
  timeZoneName: 'short'
});

console.log(data1, 'aqui')