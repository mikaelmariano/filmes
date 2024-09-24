import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import '../styles/ListaFilmes.css'; 

// Função para buscar os filmes
async function fetchMovies(page, limit = 12) {
  const url = `https://movies.slideworks.cc/movies?page=${page}&limit=${limit}`;

  try {
    const response = await axios.get(url);
    return response.data; 
  } catch (error) {
    console.error('Erro ao buscar filmes:', error);
    throw error;
  }
}


const ListaFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 

  useEffect(() => {
    const carregarFilmes = async () => {
      setLoading(true); 
      try {
        const data = await fetchMovies(page);
        setFilmes(data.data); 
        setTotalPages(data.pagination.maxPage); 
      } catch (error) {
        setError('Erro ao carregar filmes.');
      } finally {
        setLoading(false); 
      }
    };

    carregarFilmes();
  }, [page]); 

  
  const handlePageChange = (event, value) => {
    setPage(value); 
  };

  if (loading) {
    return <p>Carregando filmes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <div className="grid-container">
        {filmes.map((filme, index) => (
          <div className="movie-card" key={index}>
            <img src={filme.image_url} alt={filme.title} className='movie-card-img'/>
            <div className='grid-container-detalhes'>
            <h2 className='movie-card-titulo'>{filme.title}</h2>
            <h4 className='movie-card-ano-lanc'>Ano de Lançamento: {filme.year}</h4>
            <p className='movie-card-elenco'>{filme.crew}</p>
            <p  className="movie-card-rating">⭐ {filme.rating}/10</p>            
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
      <Stack spacing={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack></div>
    </div>
  );
};

export default ListaFilmes;
