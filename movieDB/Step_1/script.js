

// 1

const numberOfFilms = prompt('Яку кількість фільмів Ви вже перегянули?', '');

// 2

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// 3


const a = prompt('Один із останніх переглянутих фільмів?', ''),
      b = prompt('На скільки оціните його?', ''),
      c = prompt('Один із останніх переглянутих фільмів?', ''),
      d = prompt('На скільки оціните його?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

