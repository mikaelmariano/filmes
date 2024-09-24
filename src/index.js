import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'slick-carousel/slick/slick.css'; // Adiciona o CSS do Slick
import 'slick-carousel/slick/slick-theme.css'; // Adiciona o tema do Slick
import Header from './components/Header';
import Carrossel from './components/Carrossel';
import ListaFilmes from './components/ListaFilmes';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Carrossel />
        <ListaFilmes />
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
