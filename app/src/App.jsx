import { Routes, Route } from "react-router-dom";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./screens/contact/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <Header />
      <main className="flex flex-1 bg-cover overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;