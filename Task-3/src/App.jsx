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
const [page, setPage] = useState(1);
   useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);
  return () => clearTimeout(timer);
}, [search]);

useEffect(() => {
const url = debouncedSearch
  ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}&page=${page}`
  : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

const control= new AbortController();
  fetch(url,{
    signal:control.signal,
  })
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results || []);
    });
    return ()=>{
      control.abort()
    };
}, [debouncedSearch,page]);

  return (
    <>
      <Navbar />
         <SearchBar search={search} setSearch={setSearch} />
      <ResultList movies={movies} />
      <Pagination page={page}  setPage={setPage}/>
   
    </>
  );
}

export default App;

