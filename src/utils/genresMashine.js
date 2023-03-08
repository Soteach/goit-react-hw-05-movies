function getGenres(genres) {
  const arr = [];

  for (let i = 0; i < genres.length; i += 1) {
    const name = Object.values(genres[i]);
    arr.push(name[1]);
  }
  return arr.join(', ');
}

export { getGenres };
