import "./App.css";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Menu from "./components/Menu/Menu";
function App() {
  return (
    <>
      <h1 className="text-7xl text-center bg-purple-200">Best Restaurant</h1>
      <Header />
      <Hero />
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
