import AbstractObservable from '../mock/utils/abstract-observable.js';

export default class MoviesModel extends AbstractObservable{
#movies = [];

set movies(movies) {
  this.#movies = [...movies];
}

get movies() {
  return this.#movies;
}

updateMovie = (updateType, update) => {
  const index = this.#movies.findIndex((movie) => movie.id === update.id);

  if (index === -1) {
    throw new Error('Can\'t update unexisting movie');
  }

  this.#movies = [
    ...this.#movies.slice(0, index),
    update,
    ...this.#movies.slice(index + 1),
  ];

  this._notify(updateType, update);
}

addMovie = (updateType, update) => {
  this.#movies = [
    update,
    ...this.#movies,
  ];

  this._notify(updateType, update);
}

deleteMovie = (updateType, update) => {
  const index = this.#movies.findIndex((task) => task.id === update.id);

  if (index === -1) {
    throw new Error('Can\'t delete unexisting movie');
  }

  this.#movies = [
    ...this.#movies.slice(0, index),
    ...this.#movies.slice(index + 1),
  ];

  this._notify(updateType);
}

}
