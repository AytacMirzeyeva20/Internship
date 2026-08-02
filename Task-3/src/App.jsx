import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ResultList from "./components/ResultList";
import Pagination from "./components/Pagination";

const API_KEY = "293a085dd6c23c6a4bf35fb6d3c3e1a4";
function App() {
  const [movies, setMovies] = useState([]);
  const[search,setSearch]=useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

   useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);
  return () => clearTimeout(timer);
}, [search]);

useEffect(() => {
 const url = debouncedSearch
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results || []);
    });
}, [debouncedSearch]);

  return (
    <>
      <Navbar />
         <SearchBar search={search} setSearch={setSearch} />
      <ResultList movies={movies} />
   
    </>
  );
}

export default App;

