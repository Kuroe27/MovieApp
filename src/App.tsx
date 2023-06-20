import { useFetch } from "./hooks/useFetch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieInfo from "./pages/MovieInfo";
import SearchMovie from "./components/SearchMovie";
import PersonInfo from "./pages/PersonInfo";
import Navigation from "./components/Layout/Navigation";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const movies = useFetch();

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home movies={movies} />
              </>
            }
          />

          <Route path="/movies/:query/:page" element={<SearchMovie />} />

          <Route path="/movie/:id" element={<MovieInfo />}></Route>
          <Route path="/person/:id" element={<PersonInfo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
