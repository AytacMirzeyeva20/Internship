import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import Pagination from "./components/Pagination";

const API_KEY = "293a085dd6c23c6a4bf35fb6d3c3e1a4";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <ResultList movies={movies} />
    </>
  );
}

export default App;

