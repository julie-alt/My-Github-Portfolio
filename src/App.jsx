import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import RepoList from "./pages/RepoList";
import RepoDetail from "./pages/RepoDetail";
import UserSearch from "./components/UserSearch";
import Error404 from "./components/Error404";
import ErrorBoundary from "./components/ErrorBoundary";
import More from "./pages/More";
import MainContainer from "./assets/MainContainer";

function App() {
  return (
    <Router>
      <ErrorBoundary>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/repo" element={<RepoList />} />
          <Route path='/repo/:repoId' element={<RepoDetail />} />
          <Route path="/search" element={<UserSearch />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/more" element={<More />} />
          
        </Routes>
      </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
