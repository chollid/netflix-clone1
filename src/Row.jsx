import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log('This is the request: ', request);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log('This is movies', movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* <h4>{movies.first_air_date}</h4> */}

      {/* {movies.map((movie) => (
        <img
          src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`}
          alt={movie.name}
        />
      ))} */}
    </div>
  );
}

export default Row;
