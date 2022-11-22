import Home from "./pages/home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Profile from "./pages/profile/Profile";
import Auth from "./pages/auth/Auth";
const App = () => {
  return (
    <>
      {/* <Topbar />
      <div className='main'>
        <Sidebar />
        <div className='page_content'>
          <Profile />
        </div>
      </div> */}
      <Auth />
    </>
  );
};

export default App;
