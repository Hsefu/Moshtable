import React, { useState } from "react";
import { movies } from "./fakeMovieService";
import "../App.css";
import Paginations from "./Paginations";
import { paginate } from "./Utils/Paginate";
import styled from "styled-components";

const TableMovies = () => {
  const Table = styled.table`
    height: 70vh;
  `;
  const [film, setFilm] = useState(movies); //Api
  const [PageSize, setPageSize] = useState(4); //sizeNumber
  const [currentPage, setCurrentpage] = useState(1); //current page starting by 1

  const handleDelete = (movie) => {
    let newFilm = [...film];
    let newmovie = newFilm.filter((m) => m != movie);
    setFilm(newmovie);
  };
  const handlePagechange = (page) => {
    setCurrentpage(page);
  };
  if (film.length == 0) return <p>The are no movies in the Database</p>;

  //paginations
  const films = paginate(film, currentPage, PageSize);

  return (
    <>
      <h3>Showing {films.length} Movies now</h3>

      <Table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col"> Stock</th>
            <th scope="col">Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {films.map((movie) => {
            return (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Paginations
        itemsCount={film.length} //API
        pageSize={PageSize} //
        onPageChange={handlePagechange}
        currentPage={currentPage}
      />
    </>
  );
};

export default TableMovies;
