import React from 'react';
import ReactDOM from 'react-dom';
import Cabecalho from './Cabecalho';
import HeroComponent from './Hero';
import FormVagas from './FormVagas';
import ListaVagas from './ListaVagas';

const App = () => {
  return (
    <div>
      <Cabecalho />
      <HeroComponent />
      <FormVagas />
      <ListaVagas />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
