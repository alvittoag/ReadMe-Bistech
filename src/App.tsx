import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Error from "./components/Error";
import Navbar from "./components/header/Navbar";
import BukuFavorite from "./pages/user/BukuFavorite";
import Home from "./pages/Home";
import BukuSaya from "./pages/user/BukuSaya";
import Footer from "./components/Footer";
import UserPage from "./pages/user/UserPage";
import EditProfile from "./pages/user/EditProfile";
import DetailSinopsis from "./pages/user/DetailSinopsis";

function App() {
  const isLogin = useAppSelector((state) => state.user.isLogin);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {isLogin && (
          <>
            <Route path="/buku-favorit" element={<BukuFavorite />} />
            <Route path="/buku-saya" element={<BukuSaya />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/user/edit-profile" element={<EditProfile />} />
            <Route path="/buku/sinopsis" element={<DetailSinopsis />} />
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
