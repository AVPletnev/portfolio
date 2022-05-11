// Global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
// Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// Router
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutUs />} exact />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
