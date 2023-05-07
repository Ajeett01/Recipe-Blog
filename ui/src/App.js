import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailsPage from "./components/detailspage/DetailsPage"
import CatBasedPosts from "./components/categoryList/CatBasedPosts";

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/details/:slug" element={<DetailsPage/>} /> 
      <Route path="/details/:slug" element={<DetailsPage/>} /> 
      <Route path="/category/:id" element={<CatBasedPosts/>} /> 
    </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
