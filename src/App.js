import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import PlayVideo from "./PlayVideo";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route exact path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>

          <Route path="/playvideo/:id">
            <div className="app_page">
              <Sidebar />
              <PlayVideo />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
