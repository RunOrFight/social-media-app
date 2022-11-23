import Home from "./pages/home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'>
          <>
            <Topbar />
            <div className='main'>
              <Sidebar />
              <div className='page_content'>
                <Home />
              </div>
            </div>
          </>
        </Route>
        <Route path='/login'>
          <Auth type='login' />
        </Route>
        <Route path='/register'>
          <Auth type='register' />
        </Route>
      </Switch>
    </Router>

    // <Auth />
  );
};

export default App;
