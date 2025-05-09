interface TesteDeProps {
  nome: string;
  idade: number;
  comidaFavorita: string;
  [key: string]: any;
}

const objeto: TesteDeProps = {
  nome: 'Arthur',
  idade: 33,
  lugarFavorito: 'Parques',
  comidaFavorita: 'Strogonoff',
};

console.log(objeto);
